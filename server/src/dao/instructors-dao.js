// Connecting to database.
const { Database } = require("./database");
const { SkillsDao, RatesDao, PriceplansDao } = require("./dictionary");

class IntructorsDao {
  /**
   * Constructor.
   * @param connection [in] - A connection.
   */
  constructor(connection) {
    this.db = new Database(connection);
    this.rates = new RatesDao(connection);
    this.skillsDao = new SkillsDao(connection);
    this.ratesDao = new RatesDao(connection);
    this.pricesDao = new PriceplansDao(connection);
  }

  /**
   *
   * @returns {Promise<any>}
   */
  getInstructors() {
    const skills = [];
    const rates = [];
    let instructorRows = [];
    let skillRows = [];
    let rateRows = [];

    return this.skillsDao
      .getSkills()
      .then(items => {
        skillRows = items;

        return this.ratesDao.getRates();
      })
      .then(rrows => {
        rateRows = rrows;

        return this.pricesDao.getPrices();
      })
      .then(prows => {
        const priceRows = prows;

        return this.db.query(
          'SELECT c.id, c.created, c.comment, p.id as profileId, p.firstName, p.lastName, p.secondName, DATE_FORMAT(p.birthday, "%Y-%m-%d") AS birthday, p.gender FROM swschool.instructors c left join swschool.profiles p on c.profileId = p.id ORDER BY c.id;'
        );
      })
      .then(irows => {
        instructorRows = irows;

        // return this.db.forward();
      })
      .then(() => {
        const instructors = [];
        //
        skillRows.map(srow => {
          skills.push({
            id: srow.id,
            name: srow.name,
            color: srow.color,
            created: srow.created,
            comment: srow.comment
          });
        });
        //
        rateRows.map(rrow => {
          rates.push({
            id: rrow.id,
            name: rrow.name,
            rate: rrow.rate,
            students: rrow.rateStudents,
            weekends: rrow.weekends,
            comment: rrow.comment,
            skills: skills,
            skill: {
              id: rrow.skillId,
              name: rrow.skillName,
              color: rrow.color,
              created: rrow.created,
              comment: rrow.skillComment
            }
          });
        });
        //
        instructorRows.map(row => {
          instructors.push({
            id: row.id,
            profileId: row.profileId,
            lastName: row.lastName,
            firstName: row.firstName,
            secondName: row.secondName,
            birthday: row.birthday,
            gender: row.gender,
            comment: row.comment,
            contacts: [],
            skills: skills,
            selectedSkills: [],
            rates: rates,
            selectedRates: [],
            prices: [],
            selectedPrices: []
          });
        });
        return instructors;
      })
      .then(instructors => {
        console.log("getting contacts.");
        const pcontacts = instructors.map(instructor => {
          return this.getContacts(instructor).then(result => {
            return result;
          });
        });
        console.log("getting selected skills.");
        const pskills = instructors.map(instructor => {
          return this.getSelectedSkills(instructor).then(result => {
            return result;
          });
        });
        return Promise.all(pcontacts, pskills).then(results => {
          return results;
        });
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  }

  /**
   * Adds a new instructor.
   * @param instructor [in] - A new instructor.
   * @returns {Promise<any>}
   */
  addInstructor(instructor) {
    console.log(instructor);

    return this.db
      .query(
        "INSERT INTO swschool.profiles(firstName, lastName, secondName, birthday, gender, created, comment) VALUES(?, ?, ?, ?, ?, now(), ?);",
        [
          instructor.firstName,
          instructor.lastName,
          instructor.secondName,
          instructor.birthday,
          instructor.gender,
          instructor.comment
        ]
      )
      .then(() => {
        // Getting a new profile id.
        return this.db.getInsertedId().then(id => {
          instructor.profileId = id;
          return this.db
            .forward()
            .then(() => {
              return this.db
                .query(
                  "INSERT INTO swschool.instructors(profileId, created, comment) VALUES(?, now(), ?);",
                  [instructor.profileId, instructor.comment]
                )
                .then(() => {
                  return this.db
                    .getInsertedId()
                    .then(instructorId => {
                      // Saving a new client id.
                      instructor.id = instructorId;

                      instructor.contacts.map(contact => {
                        console.log(instructor);
                        return this.db
                          .query(
                            "INSERT INTO swschool.contacts(profileId, type, contact, created, comment) VALUES(?, ?, ?, now(), ?);",
                            [
                              instructor.profileId,
                              contact.type,
                              contact.value,
                              contact.comment
                            ]
                          )
                          .then(() => {
                            return this.db
                              .getInsertedId()
                              .then(contactId => {
                                contact.id = contactId;
                                return this.db.forward();
                              })
                              .catch(err => {
                                throw err;
                              });
                          })
                          .catch(err => {
                            throw err;
                          });
                      });
                    })
                    .catch(err => {
                      throw err;
                    });
                })
                .catch(err => {
                  throw err;
                });
            })
            .catch(err => {
              throw err;
            });
        });
      })
      .then(() => {
        return instructor;
      })
      .catch(err => {
        throw err;
      });
  }

  /**
   * Updates instructor.
   * @param instructor
   * @returns {Promise<any>}
   */
  updateInstructor(instructor) {
    return this.db
      .query(
        "UPDATE swschool.profiles SET firstName = ?, lastName = ?, secondName = ?, birthday = ?, gender = ?, comment = ? WHERE id = ?;",
        [
          instructor.firstName,
          instructor.lastName,
          instructor.secondName,
          instructor.birthday,
          instructor.gender,
          instructor.comment,
          instructor.profileId
        ]
      )
      .then(() => {
        return this.db
          .query("UPDATE swschool.instructors SET comment = ? WHERE id = ?;", [
            instructor.comment,
            instructor.id
          ])
          .then(() => {
            return this.db
              .query(
                "DELETE FROM swschool.contacts WHERE profileId = ?;",
                instructor.profileId
              )
              .then(() => {
                instructor.contacts.map(contact => {
                  return this.db
                    .query(
                      "INSERT INTO swschool.contacts(profileId, type, contact, created, comment) VALUES(?, ?, ?, now(), ?);",
                      [
                        instructor.profileId,
                        contact.type,
                        contact.value,
                        contact.comment
                      ]
                    )
                    .then(() => {
                      return this.db
                        .getInsertedId()
                        .then(id => {
                          contact.id = id;
                          return contact;
                        })
                        .catch(err => {
                          throw err;
                        });
                    })
                    .catch(err => {
                      throw err;
                    });
                });
              })
              .then(() => {
                return this.db
                  .query(
                    "DELETE FROM swschool.profile_skills WHERE profileId = ?;",
                    instructor.profileId
                  )
                  .then(() => {
                    instructor.selectedSkills.map(selectedSkill => {
                      return this.db
                        .query(
                          "INSERT INTO swschool.profile_skills(profileId, skillId, created) VALUES(?, ?, now());",
                          [instructor.profileId, selectedSkill.id]
                        )
                        .then(() => {
                          return this.db
                            .getInsertedId()
                            .then(id => {
                              selectedSkill.id = id;
                              return selectedSkill;
                            })
                            .catch(err => {
                              throw err;
                            });
                        })
                        .catch(err => {
                          throw err;
                        });
                    });
                  })
                  .catch(err => {
                    throw err;
                  });
              })
              .catch(err => {
                throw err;
              });
          })
          .catch(err => {
            throw err;
          });
      })
      .then(() => {
        return instructor;
      })
      .catch(err => {
        throw err;
      });
  }

  /**
   *
   * @param instructor
   * @returns {Promise<any>}
   */
  deleteInstructor(instructor) {
    return this.db
      .query(
        "DELETE FROM swschool.contacts WHERE profileId = ?;",
        instructor.profileId
      )
      .then(() => {
        return this.db
          .query(
            "DELETE FROM swschool.profiles WHERE id = ?;",
            instructor.profileId
          )
          .then(() => {
            return this.db
              .query(
                "DELETE FROM swschool.clients WHERE id = ?;",
                instructor.id
              )
              .catch(err => {
                throw err;
              });
          })
          .then(() => {
            return instructor;
          })
          .catch(err => {
            throw err;
          });
      })
      .then(() => {
        return instructor;
      })
      .catch(err => {
        throw err;
      });
  }

  /**
   * Gets a list of instructor contacts.
   * @param instructor [in] - Instructor.
   * @returns {Promise<any>}
   */
  getContacts(instructor) {
    return this.db
      .query(
        "SELECT id, type, contact, comment FROM swschool.contacts WHERE profileId = ?;",
        instructor.profileId
      )
      .then(contacts => {
        // Saving the list of contacts.
        contacts.map(contact => {
          instructor.contacts.push({
            id: contact.id,
            type: contact.type,
            value: contact.contact,
            comment: contact.comment
          });
        });
        return instructor;
      });
  }

  /**
   * Gets a list of selected skills.
   * @param instructor
   * @returns {Promise<any>}
   */
  getSelectedSkills(instructor) {
    return this.db
      .query(
        "SELECT s.id, s.name, s.color, s.created, s.comment FROM swschool.profile_skills ps left join swschool.profiles p on ps.profileId = p.id AND p.id = ? left join dicts.skills s on s.id = ps.id;",
        instructor.profileId
      )
      .then(rows => {
        rows.map(row => {
          instructor.selectedSkills.push({
            id: row.id,
            name: row.name,
            color: row.color,
            created: row.created,
            comment: row.comment
          });
        });
        return instructor;
      });
  }
}
module.exports = { IntructorsDao };

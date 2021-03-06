import React, { Component } from "react";

import TextField from "@material-ui/core/TextField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";

import classes from "./Contact.module.scss";

const socialMedia = [
  {
    icon: "envelope",
    url: "mailto:duhamelgm@gmail.com"
  },
  {
    icon: ["fab", "twitter"],
    url: "algo.com"
  },
  {
    icon: ["fab", "github"],
    url: "algo.com"
  }
];

export default class Contact extends Component {
  render() {
    return (
      <section id="contact">
        <div className="container">
          <div className={classes.grid}>
            <header>
              <h2 className="title">Contact</h2>
            </header>
            <form name="contact" method="post" className={classes.contactForm}>
              <input type="hidden" name="form-name" value="contact" />
              <TextField name="name" label="Name" margin="dense" />
              <TextField name="email" label="Email" margin="dense" />
              <TextField name="message" label="Your message" multiline margin="dense" />
              <Button type="submit" variant="outlined" className={classes.button}>
                Default
              </Button>
            </form>
            <ul className={classes.socialMediaList}>
              {socialMedia.map((element, id) => (
                <li key={id}>
                  <a href={element.url}>
                    <IconButton>
                      <FontAwesomeIcon icon={element.icon} />
                    </IconButton>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

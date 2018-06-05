// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Text,
  Code,
  Image,
  // Appear,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';
import styled from "react-emotion"

import ZImage from "./assets/z.png"
import FzfImage from "./assets/fzf.png"

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022', // black
    tertiary: '#03A9FC', // blue
    quartenary: '#36454f', // charcoal
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

const InCode = styled(Code)`
  background-color: #f7f7f9;
  color: #cc2255;
  border: 1px solid #e1e1e8;
  border-radius: 3px;
  padding-left: 2px;
  padding-right: 2px;
`;

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide bgColor="primary">
          <Heading size={1} fit caps textColor="secondary">
            Advanced CLI
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} bold>
            By Nick Waywood
          </Text>
        </Slide>
        <Slide progressColor="quartenary">
          <Heading size={2} textColor="tertiary">
            Contents
          </Heading>
          <List>
            <ListItem>
            Fundamentals
            <List padding="0 0 0 40px">
                <ListItem>Windows options explained</ListItem>
                <ListItem>Package Managers</ListItem>
                <ListItem>Terminal App</ListItem>
            </List>
            </ListItem>
            <ListItem>Navigation</ListItem>
            <ListItem>Executing Commands</ListItem>
            <ListItem>Discovery and Search</ListItem>
            <ListItem>Miscellaneous</ListItem>
            <ListItem>Other (not covered)</ListItem>
            <ListItem>Links</ListItem>
          </List>
        </Slide>
        <Slide bgColor="tertiary">
          <Heading textColor="primary">Fundamentals</Heading>
        </Slide>
        <Slide progressColor="quartenary">
            <Heading fit textColor="tertiary">Windows Options Explained</Heading>
            <List>
                <ListItem>
                    Windows shell
                    <List padding="10px 0 10px 40px">
                        <ListItem>Command Prompt</ListItem>
                        <ListItem>Powershell</ListItem>
                    </List>
                </ListItem>
                <ListItem>
                    Unix shell
                    <List padding="10px 0 10px 40px">
                        <ListItem>Cygwin/GitBash etc (pre Windows 10)</ListItem>
                        <ListItem>Bash shell (>= Windows 10)</ListItem>
                    </List>
                </ListItem>
            </List>
        </Slide>
        <Slide progressColor="quartenary">
            <Heading fit textColor="tertiary">Package Managers</Heading>
            <List>
                <ListItem>
                    Windows (PS only)
                    <List padding="10px 0 10px 40px">
                        <ListItem>PS has its own package manager, PS Gallery</ListItem>
                    </List>
                </ListItem>
                <ListItem>
                    MacOS
                    <List padding="10px 0 10px 40px">
                        <ListItem>Homebrew (<InCode>brew</InCode>) - <a href="brew.sh">brew.sh</a></ListItem>
                    </List>
                </ListItem>
                <ListItem>
                    Unix Distros
                    <List padding="10px 0 10px 40px">
                        <ListItem><Code>apt-get</Code>, <Code>yum</Code> etc</ListItem>
                    </List>
                </ListItem>
            </List>
        </Slide>
        <Slide progressColor="quartenary">
            <Heading fit textColor="tertiary">Terminal App</Heading>
            <List>
                <ListItem>
                    Apps
                    <List padding="10px 0 10px 40px">
                        <ListItem>
                            iTerm2 - <a href="www.iterm2.com">iterm2.com</a> (macOS only)
                            <List padding="10px 0 10px 40px">
                                <ListItem><Code>brew install iterm2</Code></ListItem>
                            </List>
                        </ListItem>
                        <ListItem>Hyper - <a href="hyper.is">hyper.is</a> (cross platform)</ListItem>
                    </List>
                </ListItem>
                <ListItem>
                    Adds functionality such as:
                    <List padding="10px 0 10px 40px">
                        <ListItem>Horizontal and vertical splits</ListItem>
                        <ListItem>Full screen mode</ListItem>
                        <ListItem>Richer theming</ListItem>
                        <ListItem>tmux integration</ListItem>
                    </List>
                </ListItem>
            </List>
        </Slide>
        <Slide bgColor="tertiary">
          <Heading textColor="primary">Navigation</Heading>
        </Slide>
        <Slide progressColor="quartenary">
            <Heading size={2} textColor="tertiary">Navigation Basics</Heading>
            <List>
                <ListItem>
                    <Code>cd</Code> - Change directory
                    <List padding="10px 0 10px 40px">
                        <ListItem><Code>cd ..</Code>, <Code>cd ~</Code>, <Code>cd -</Code></ListItem>
                    </List>
                </ListItem>
                <ListItem>
                <Code>ls</Code> - List directory contents
                <List padding="10px 0 10px 40px">
                    <ListItem><Code>ls -lh</Code>, <Code>ls -lAh</Code>, <Code>ls -G</Code></ListItem>
                </List>
                </ListItem>
                <ListItem>
                    <Code>pwd</Code> - Print working directory name
                </ListItem>
            </List>
        </Slide>
        <Slide progressColor="quartenary">
            <Heading size={2} textColor="tertiary">Navigation - z</Heading>
            <Image src={ZImage} width="70%" />
            <List>
                <ListItem>
                    Install:
                    <List padding="10px 0 10px 40px">
                        <ListItem>MacOS - <Code>brew install z</Code></ListItem>
                        <ListItem>Windows - <Code>Install-Module -Name z</Code></ListItem>
                    </List>
                </ListItem>
                <ListItem>
                    <Code>z</Code> tracks all of your visited directories, based on frequency
                </ListItem>
                <ListItem>z lets you quickly navigate to any visited directory using regex patterns</ListItem>
                <ListItem>Usage <Code>z [-chlrtx] [regex1 ...]</Code></ListItem>
                <ListItem>Demo...</ListItem>
            </List>
        </Slide>
        <Slide progressColor="quartenary">
            <Heading size={2} textColor="tertiary">Navigation - fzf</Heading>
            <Image src={FzfImage} width="70%" />
            <List>
                <ListItem>
                    Install:
                    <List padding="10px 0 10px 40px">
                        <ListItem>MacOS - <Code>brew install fzf</Code></ListItem>
                        <ListItem>Windows - <Code>Install-Module -Name PSFzf</Code></ListItem>
                    </List>
                </ListItem>
                <ListItem>
                    <Code>fzf</Code> is a general purpose command-line fuzzy finder
                </ListItem>
                <ListItem>It's a very powerful and flexible tool that has lots of uses</ListItem>
                <ListItem>However, some of its out-of-the-box functionality is useful for navigation</ListItem>
                <ListItem><Code>alt-C</Code> opens a fuzzy finder for cd'ing into the selected directory, demo...</ListItem>
            </List>
        </Slide>
        <Slide progressColor="quartenary">
            <Heading size={2} textColor="tertiary">Navigation - fzf + z</Heading>
            <List>
                <ListItem>fzf enables you to display the base output of z in a fuzzy list</ListItem>
                <ListItem>This is useful when you can't remember the exact name of a directory</ListItem>
                <ListItem>Or when you can't be bothered providing a regex sequence to z from memory</ListItem>
                <ListItem>fzf wiki on github is full of HEAPS of other examples of fzf</ListItem>
                <ListItem>Demo...</ListItem>
            </List>
        </Slide>
      </Deck>
    );
  }
}

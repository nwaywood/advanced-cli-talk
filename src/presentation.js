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
  CodePane,
  Image,
  // Appear,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';
import styled from "react-emotion"

import ZImage from "./assets/z.png"
import FzfImage from "./assets/fzf.png"
import UpImage from "./assets/up.png"
import RangerImage from "./assets/ranger.png"
import RangerExampleImage from "./assets/ranger_example.png"
import MyPrompt from "./assets/my_prompt.png"
import OhMyZsh from "./assets/oh_my_zsh.png"
import Tldr from "./assets/tldr.png"
import Tmux from "./assets/tmux.png"

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
        <Slide progressColor="quartenary">
            <Heading size={2} textColor="tertiary">Navigation - up</Heading>
            <Image src={UpImage} width="70%" />
            <List>
                <ListItem><a href="github.com/shannonmoeller/up">shannonmoeller/up</a></ListItem>
                <ListItem>This is for you if you are sick of typing<br /><Code>$ cd ../../..</Code></ListItem>
                <ListItem>Go up 3 directories:<br /><Code>$ up 3</Code></ListItem>
                <ListItem>Go up to the directory called <Code>code</Code>:<br /><Code>$ up code</Code></ListItem>
                <ListItem>Demo...</ListItem>
            </List>
        </Slide>
        <Slide progressColor="quartenary">
            <Heading fit textColor="tertiary">Navigation - ranger</Heading>
            <Image src={RangerImage} width="70%" />
            <List>
                <ListItem>A complete file manager in the console</ListItem>
            </List>
            <Image src={RangerExampleImage} width="80%" />
        </Slide>
        <Slide progressColor="quartenary">
            <Heading fit textColor="tertiary">Navigation - summary</Heading>
            <List>
                <ListItem><Code>z</Code> - lets you quickly jump to any dir</ListItem>
                <ListItem><Code>fzf</Code> - lets you quickly jump to sub dirs</ListItem>
                <ListItem><Code>up</Code> - lets you quickly jump to parent dirs</ListItem>
                <ListItem><Code>ranger</Code> - file manager for general navigation</ListItem>
            </List>
        </Slide>
        <Slide bgColor="tertiary">
          <Heading textColor="primary">Executing Commands</Heading>
        </Slide>
        <Slide progressColor="quartenary">
            <Heading size={2} textColor="tertiary">Commands Basics</Heading>
            <List>
                <ListItem>Pressing "up" will traverse command history</ListItem>
                <ListItem>Typing a partial command then pressing "up" will traverse the subset of command history that matches</ListItem>
                <ListItem>Tip: If you want each shell instance to have its own history</ListItem>
            </List>
            <CodePane style={{ fontSize: "30px" }} lang="javascript" source={`unsetopt history\nunsetopt inc_append_history`} />
        </Slide>
        <Slide progressColor="quartenary">
            <Heading size={2} textColor="tertiary">Commands - fzf</Heading>
            <List>
                <ListItem>In navigation we covered fzf's <Code>alt-C</Code> command</ListItem>
                <ListItem>The other two commands that fzf come with out-of-the-box are useful for executing commands</ListItem>
                <ListItem><Code>ctrl-R</Code> pastes the selected command from history onto the command line</ListItem>
                <ListItem>
                    <Code>ctrl-T</Code> pastes the selected files and directories onto the command line
                    <List padding="0 0 0 40px">
                        <ListItem>Useful for commands that take files/dirs as arguments</ListItem>
                    </List>
                </ListItem>
                <ListItem>Demo...</ListItem>
            </List>
        </Slide>
        <Slide progressColor="quartenary">
            <Heading fit textColor="tertiary">Commands - Editing</Heading>
            <List>
                <ListItem>
                    Shells come with built in functionality for editing commands
                    <List padding="0 0 0 40px">
                        <ListItem>vi mode and emacs mode are available</ListItem>
                    </List>
                </ListItem>
                <ListItem>
                    Emacs mode is enabled by default
                    <List padding="0 0 0 40px">
                        <ListItem><Code>ctrl - a</Code> - move cursor to start of line</ListItem>
                        <ListItem><Code>ctrl - e</Code> - move cursor to end of line</ListItem>
                        <ListItem><Code>ctrl - u</Code> - delete line</ListItem>
                        <ListItem><Code>ctrl - w</Code> - delete word</ListItem>
                    </List>
                </ListItem>
                <ListItem>Demo...</ListItem>
            </List>
        </Slide>
        <Slide progressColor="quartenary">
            <Heading fit textColor="tertiary">Commands - Editing</Heading>
            <List>
                <ListItem>
                    vi editing mode can be enabled by adding the following to your shell config
                    <List padding="0 0 0 40px">
                        <ListItem><Code>set -o vi</Code></ListItem>
                    </List>
                </ListItem>
                <ListItem>
                    This gives you access to normal mode (via <Code>escape</Code> by default)
                    <List padding="0 0 0 40px">
                        <ListItem><Code>^</Code>, <Code>$</Code>, <Code>b</Code>, <Code>w</Code> and <Code>e</Code></ListItem>
                        <ListItem><Code>i</Code>, <Code>I</Code>, <Code>a</Code> and <Code>A</Code></ListItem>
                        <ListItem><Code>h</Code>, <Code>j</Code>, <Code>k</Code> and <Code>l</Code></ListItem>
                    </List>
                </ListItem>
                <ListItem>Demo...</ListItem>
                <ListItem>It's also possible to enable both vi and emacs mode</ListItem>
            </List>
        </Slide>
        <Slide bgColor="tertiary">
          <Heading textColor="primary">Discovery and Search</Heading>
        </Slide>
        <Slide progressColor="quartenary">
            <Heading size={2} textColor="tertiary">Discovery - tree</Heading>
            <List>
                <ListItem>
                    Install:
                    <List padding="10px 0 10px 40px">
                        <ListItem>MacOS - <Code>brew install tree</Code></ListItem>
                        <ListItem>Windows - <Code>Install-Module -Name Tree</Code></ListItem>
                    </List>
                </ListItem>
                <ListItem>Show the contents of the current directory as a tree</ListItem>
                <ListItem>
                    Handy flags
                    <List padding="0 0 0 40px">
                        <ListItem><Code>-d</Code> - Show dirs only</ListItem>
                        <ListItem><Code>-a</Code> - Show hidden files</ListItem>
                        <ListItem><Code>-L num</Code> - num is the depth of the tree</ListItem>
                    </List>
                </ListItem>
                <ListItem>Demo...</ListItem>
            </List>
        </Slide>
        <Slide progressColor="quartenary">
            <Heading size={2} textColor="tertiary">Search - find</Heading>
            <List>
                <ListItem><Code>find</Code> comes pre installed on unix</ListItem>
                <ListItem>On windows the <Code>dir</Code> command is the equivalent</ListItem>
                <ListItem>Find files unders the given directory tree, recursively</ListItem>
                <ListItem>
                    Usage
                    <List padding="0 0 0 40px">
                        <ListItem>Find files by extension:<br /><Code>$ find root_path -name "*.ext"</Code></ListItem>
                        <ListItem>Find files matching path pattern:<br /><Code>$ find root_path -path "**/lib/*"</Code></ListItem>
                    </List>
                </ListItem>
                <ListItem>Demo...</ListItem>
            </List>
        </Slide>
        <Slide progressColor="quartenary">
            <Heading size={2} textColor="tertiary">Search - "grep"</Heading>
            <List>
                <ListItem>
                    Install:
                    <List padding="10px 0 10px 40px">
                        <ListItem><Code style={{fontSize: "2.2rem"}}>brew install the_silver_surfer ripgrep</Code></ListItem>
                    </List>
                </ListItem>
                <ListItem><Code>grep</Code> is a command line search tool</ListItem>
                <ListItem>However grep is slow and not very user friendly</ListItem>
                <ListItem>The Silver Surfer (<Code>ag</Code>) and ripgrep (<Code>rg</Code>) are two popular, fast, grep replacements with sensible defaults</ListItem>
            </List>
        </Slide>
        <Slide progressColor="quartenary">
            <Heading size={2} textColor="tertiary">Search - "grep"</Heading>
            <List>
                <ListItem>
                    The Silver Surfer (<Code>ag</Code>) and ripgrep (<Code>rg</Code>) defaults include
                    <List padding="0 0 0 40px">
                        <ListItem>Ignores VCS dirs by default</ListItem>
                        <ListItem>Ignores .gitignored files/dirs and hidden/binary files by default</ListItem>
                        <ListItem>Defaults to doing a recursive directory search</ListItem>
                    </List>
                </ListItem>
                <ListItem>More intuitive command line flags/options</ListItem>
                <ListItem>Support config files for global (or project level) customization</ListItem>
                <ListItem>Demo...</ListItem>
                <ListItem><Code>ag</Code>/<Code>rg</Code> are amazing for editor integrations</ListItem>
            </List>
        </Slide>
        <Slide bgColor="tertiary">
          <Heading textColor="primary">Miscellaneous</Heading>
        </Slide>
        <Slide progressColor="quartenary">
            <Heading size={2} textColor="tertiary">Custom Prompt</Heading>
            <List>
                <ListItem>The default bash prompt is not very informative or helpful</ListItem>
                <ListItem>
                    A good prompt should display useful information, such as
                    <List padding="0 0 0 40px">
                        <ListItem>Current directory/path (no more <Code>pwd</Code>)</ListItem>
                        <ListItem>Current branch</ListItem>
                        <ListItem>Current repository status</ListItem>
                        <ListItem>Error codes</ListItem>
                    </List>
                </ListItem>
            </List>
            <Image src={MyPrompt} width="70%" />
        </Slide>
        <Slide progressColor="quartenary">
            <Heading fit textColor="tertiary">Custom Prompt - oh-my-zsh</Heading>
            <Image src={OhMyZsh} width="70%" />
            <List>
                <ListItem>There are lots of different ways to create a custom prompt</ListItem>
                <ListItem>oh-my-zsh is framework for zsh which makes it super easy</ListItem>
                <ListItem>Hundreds of out-of-the-box prompts to choose from</ListItem>
                <ListItem>
                    Your prompt can display whatever is useful for you
                    <List padding="0 0 0 40px">
                        <ListItem>Language version</ListItem>
                        <ListItem>Time</ListItem>
                        <ListItem>Git information</ListItem>
                        <ListItem>etc</ListItem>
                    </List>
                </ListItem>
            </List>
        </Slide>
        <Slide progressColor="quartenary">
            <Heading size={2} textColor="tertiary">Aliases</Heading>
            <List>
                <ListItem>Aliases are useful for annoying to type commands or for commands where you always want some setting applied</ListItem>
                <ListItem><Code>alias d="docker"</Code></ListItem>
                <ListItem><Code>alias dc="docker-compose"</Code></ListItem>
                <ListItem><Code>alias tree="tree -I node_modules"</Code></ListItem>
                <ListItem>VM ssh commands</ListItem>
            </List>
        </Slide>
        <Slide progressColor="quartenary">
            <Heading size={2} textColor="tertiary">Paste and Copy</Heading>
            <List>
                <ListItem>Mac - <Code>pbcopy</Code>, <Code>pbpaste</Code></ListItem>
                <ListItem>Unix - <Code>xclip</Code></ListItem>
                <ListItem>Windows - <Code>clip</Code></ListItem>
                <ListItem>Instead of having to manually select and copy output from a command, just pipe it directly into your clipboard!</ListItem>
                <ListItem>e.g. <Code>$ cat example.json | pbcopy</Code></ListItem>
            </List>
        </Slide>
        <Slide progressColor="quartenary">
            <Heading size={2} textColor="tertiary">tldr</Heading>
            <Image src={Tldr} width="70%" />
            <List>
                <ListItem>
                    Install:
                    <List padding="10px 0 10px 40px">
                        <ListItem><Code>$ brew install tldr</Code></ListItem>
                    </List>
                </ListItem>
                <ListItem>Simplied <Code>man</Code> pages</ListItem>
                <ListItem>Provides simple explanation of command and shows practical examples</ListItem>
                <ListItem>Usage eg: <Code>$ tldr tar</Code> instead of<br /><Code>$ man tar</Code></ListItem>
            </List>
        </Slide>
        <Slide progressColor="quartenary">
            <Heading size={2} textColor="tertiary">tmux</Heading>
            <Image src={Tmux} width="70%" />
            <List>
                <ListItem>
                    Install:
                    <List padding="10px 0 10px 40px">
                        <ListItem><Code>$ brew install tmux</Code></ListItem>
                    </List>
                </ListItem>
                <ListItem><Code>tmux</Code> is a terminal multiplexer</ListItem>
                <ListItem>Similar to GNU Screen, but newer/better</ListItem>
                <ListItem>In laymans terms, it lets you manage multiple sessions within a single terminal window</ListItem>
                <ListItem>Each session is composed of windows and panes</ListItem>
            </List>
        </Slide>
        <Slide progressColor="quartenary">
            <Heading size={2} textColor="tertiary">tmux</Heading>
            <List>
                <ListItem>Useful if you work on multiple projects/things that require some set of shells</ListItem>
                <ListItem>MUST HAVE if you often work on remote servers!</ListItem>
                <ListItem>Warning: This is not just a command, it is an application. And as such, has a steeper learning curve</ListItem>
            </List>
        </Slide>
        <Slide bgColor="tertiary">
          <Heading textColor="primary">Other</Heading>
        </Slide>
        <Slide progressColor="quartenary">
            <Heading size={2} textColor="tertiary">Other</Heading>
            <List>
                <ListItem>
                    "SysAdmin" commands
                    <List padding="0 0 0 40px">
                        <ListItem><Code>sed</Code>, <Code>awk</Code>, <Code>netstat</Code>, <Code>tail</Code></ListItem>, etc
                    </List>
                </ListItem>
                <ListItem>
                    Domain specific commands
                    <List padding="0 0 0 40px">
                        <ListItem><Code>jq</Code> - Command line JSON processor</ListItem>
                        <ListItem>csvkit - Suite of tools for working with CSV</ListItem>
                        <ListItem>HTTPie (<Code>http</Code>) - A user friendly cURL replacement</ListItem>
                        <ListItem><Code>hub</Code> - hub helps you win at git</ListItem>
                    </List>
                </ListItem>
                <ListItem>Theming</ListItem>
            </List>
        </Slide>
        <Slide bgColor="tertiary">
          <Heading textColor="primary">Thank you</Heading>
        </Slide>
        <Slide progressColor="quartenary">
            <Heading size={2} textColor="tertiary">References</Heading>
            <List>
                <ListItem>https://hackernoon.com/a-gentle-introduction-to-tmux-8d784c404340</ListItem>
            </List>
        </Slide>
      </Deck>
    );
  }
}

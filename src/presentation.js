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
  Appear,
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
import Ag from "./assets/ag.png"
import Rg from "./assets/rg.png"

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
  box-sizing: border-box;
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
            <ListItem>References</ListItem>
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
                    <List padding="0 0 10px 40px">
                        <ListItem>Command Prompt</ListItem>
                        <ListItem>Powershell</ListItem>
                    </List>
                </ListItem>
                <ListItem>
                    Unix shell
                    <List padding="0 0 10px 40px">
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
                    <List padding="0 0 10px 40px">
                        <ListItem>PS has its own package manager, PS Gallery</ListItem>
                    </List>
                </ListItem>
                <ListItem>
                    MacOS
                    <List padding="0 0 10px 40px">
                        <ListItem>Homebrew (<InCode>brew</InCode>) - <a href="https://brew.sh/">brew.sh</a></ListItem>
                    </List>
                </ListItem>
                <ListItem>
                    Unix Distros
                    <List padding="0 0 10px 40px">
                        <ListItem><InCode>apt-get</InCode>, <InCode>yum</InCode> etc</ListItem>
                    </List>
                </ListItem>
            </List>
        </Slide>
        <Slide progressColor="quartenary">
            <Heading fit textColor="tertiary">Terminal App</Heading>
            <List>
                <ListItem>
                    Apps
                    <List padding="0 0 10px 40px">
                        <ListItem>
                            iTerm2 - <a href="https://www.iterm2.com/">iterm2.com</a> (macOS only)
                            <List padding="5px 0 5px 40px">
                                <ListItem><InCode>$ brew install iterm2</InCode></ListItem>
                            </List>
                        </ListItem>
                        <ListItem>Hyper - <a href="https://hyper.is/">hyper.is</a> (cross platform)</ListItem>
                    </List>
                </ListItem>
                <Appear>
                    <ListItem>
                        Adds functionality such as:
                        <List padding="0 0 10px 40px">
                            <ListItem>Horizontal and vertical splits</ListItem>
                            <ListItem>Full screen mode</ListItem>
                            <ListItem>Richer theming</ListItem>
                            <ListItem>tmux integration</ListItem>
                        </List>
                    </ListItem>
                </Appear>
            </List>
        </Slide>
        <Slide bgColor="tertiary">
          <Heading textColor="primary">Navigation</Heading>
        </Slide>
        <Slide progressColor="quartenary">
            <Heading size={2} textColor="tertiary">Navigation Basics</Heading>
            <List>
                <ListItem>
                    <InCode>cd</InCode> - Change directory
                    <List padding="10px 0 10px 40px">
                        <ListItem><InCode>cd ..</InCode>, <InCode>cd ~</InCode>, <InCode>cd -</InCode></ListItem>
                    </List>
                </ListItem>
                <ListItem>
                <InCode>ls</InCode> - List directory contents
                <List padding="10px 0 10px 40px">
                    <ListItem><InCode>ls -lh</InCode>, <InCode>ls -lAh</InCode>, <InCode>ls -G</InCode></ListItem>
                </List>
                </ListItem>
                <ListItem>
                    <InCode>pwd</InCode> - Print working directory name
                </ListItem>
            </List>
        </Slide>
        <Slide progressColor="quartenary">
            <Heading size={2} textColor="tertiary">Navigation - z</Heading>
            <Image src={ZImage} width="70%" />
            <List>
                <ListItem>Install: <InCode>$ brew install z</InCode></ListItem>
                <ListItem>
                    <InCode>z</InCode> tracks all of your visited directories, based on frequency
                </ListItem>
                <ListItem>z lets you quickly navigate to any visited directory using regex patterns</ListItem>
                <Appear>
                    <div>
                        <ListItem>Usage <InCode>z [-chlrtx] [regex1 ...]</InCode></ListItem>
                        <ListItem>Demo...</ListItem>
                    </div>
                </Appear>
            </List>
        </Slide>
        <Slide progressColor="quartenary">
            <Heading size={2} textColor="tertiary">Navigation - fzf</Heading>
            <Image src={FzfImage} width="70%" />
            <List>
                <ListItem>Install: <InCode>$ brew install fzf</InCode></ListItem>
                <ListItem>
                    <InCode>fzf</InCode> is a general purpose command-line fuzzy finder
                </ListItem>
                <ListItem>It's a very powerful and flexible tool that has lots of uses</ListItem>
                <Appear>
                    <div>
                        <ListItem>However, some of its out-of-the-box functionality is useful for navigation</ListItem>
                        <ListItem><InCode>alt-C</InCode> opens a fuzzy finder for <InCode>cd</InCode>'ing into a nested directory</ListItem>
                    </div>
                </Appear>
                <Appear>
                    <ListItem>Demo...</ListItem>
                </Appear>
            </List>
        </Slide>
        <Slide progressColor="quartenary">
            <Heading size={2} textColor="tertiary">Navigation - fzf + z</Heading>
            <List>
                <ListItem>fzf enables you to display the base output of z in a fuzzy list</ListItem>
                <ListItem>This is useful when you can't remember the exact name of a directory</ListItem>
                <ListItem>Or when you can't be bothered providing a regex sequence to z from memory</ListItem>
                <Appear>
                    <div>
                        <ListItem><a href="https://github.com/junegunn/fzf/wiki/examples">fzf wiki</a> on github is full of HEAPS of other examples of fzf</ListItem>
                        <ListItem>Demo...</ListItem>
                    </div>
                </Appear>
            </List>
        </Slide>
        <Slide progressColor="quartenary">
            <Heading size={2} textColor="tertiary">Navigation - up</Heading>
            <Image src={UpImage} width="70%" />
            <List>
                <ListItem><a href="https://github.com/shannonmoeller/up">shannonmoeller/up</a></ListItem>
                <ListItem>This is for you if you are sick of typing<br /><InCode>$ cd ../../..</InCode></ListItem>
                <ListItem>Go up 3 directories:<br /><InCode>$ up 3</InCode></ListItem>
                <ListItem>Go up to the directory called <InCode>code</InCode>:<br /><InCode>$ up code</InCode></ListItem>
                <Appear>
                    <ListItem>Demo...</ListItem>
                </Appear>
            </List>
        </Slide>
        <Slide progressColor="quartenary">
            <Heading fit textColor="tertiary">Navigation - ranger</Heading>
            <Image src={RangerImage} width="70%" />
            <List>
                <ListItem>Install: <InCode>$ brew install ranger</InCode></ListItem>
                <ListItem>A complete file manager in the console</ListItem>
            </List>
            <Image src={RangerExampleImage} width="80%" />
        </Slide>
        <Slide progressColor="quartenary">
            <Heading fit textColor="tertiary">Navigation - Summary</Heading>
            <List>
                <ListItem><InCode>z</InCode> - lets you quickly jump to any dir</ListItem>
                <ListItem><InCode>fzf</InCode> - lets you quickly jump to sub dirs</ListItem>
                <ListItem><InCode>up</InCode> - lets you quickly jump to parent dirs</ListItem>
                <ListItem><InCode>ranger</InCode> - file manager for general navigation</ListItem>
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
                <ListItem>In navigation we covered fzf's <InCode>alt-C</InCode> command</ListItem>
                <ListItem>The other two commands that fzf come with out-of-the-box are useful for executing commands</ListItem>
                <ListItem><InCode>ctrl-R</InCode> pastes the selected command from history onto the command line</ListItem>
                <ListItem>
                    <InCode>ctrl-T</InCode> pastes the selected files and directories onto the command line
                    <List padding="0 0 0 40px">
                        <ListItem>Useful for commands that take files/dirs as arguments</ListItem>
                    </List>
                </ListItem>
                <Appear>
                    <ListItem>Demo...</ListItem>
                </Appear>
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
                <Appear>
                    <ListItem>
                        Emacs mode is enabled by default
                        <List padding="0 0 0 40px">
                            <ListItem padding="0 0 5px 0"><InCode>ctrl - a</InCode> - move cursor to start of line</ListItem>
                            <ListItem padding="0 0 5px 0"><InCode>ctrl - e</InCode> - move cursor to end of line</ListItem>
                            <ListItem padding="0 0 5px 0"><InCode>ctrl - u</InCode> - delete line</ListItem>
                            <ListItem><InCode>ctrl - w</InCode> - delete word</ListItem>
                        </List>
                    </ListItem>
                </Appear>
                <Appear>
                    <ListItem>Demo...</ListItem>
                </Appear>
            </List>
        </Slide>
        <Slide progressColor="quartenary">
            <Heading fit textColor="tertiary">Commands - Editing</Heading>
            <List>
                <ListItem>
                    vi editing mode can be enabled by adding the following to your shell config
                    <List padding="0 0 0 40px">
                        <ListItem><InCode>set -o vi</InCode></ListItem>
                    </List>
                </ListItem>
                <Appear>
                    <ListItem>
                        This gives you access to normal mode (via <InCode>escape</InCode> by default)
                        <List padding="0 0 0 40px">
                            <ListItem padding="5px 0 5px 0"><InCode>^</InCode>, <InCode>$</InCode>, <InCode>b</InCode>, <InCode>w</InCode> and <InCode>e</InCode></ListItem>
                            <ListItem padding="0 0 5px 0"><InCode>i</InCode>, <InCode>I</InCode>, <InCode>a</InCode> and <InCode>A</InCode></ListItem>
                            <ListItem><InCode>h</InCode>, <InCode>j</InCode>, <InCode>k</InCode> and <InCode>l</InCode></ListItem>
                        </List>
                    </ListItem>
                </Appear>
                <Appear>
                    <div>
                        <ListItem>Demo...</ListItem>
                        <ListItem>It's also possible to enable both vi and emacs mode</ListItem>
                    </div>
                </Appear>
            </List>
        </Slide>
        <Slide bgColor="tertiary">
          <Heading textColor="primary">Discovery and Search</Heading>
        </Slide>
        <Slide progressColor="quartenary">
            <Heading size={2} textColor="tertiary">Discovery - tree</Heading>
            <List>
                <ListItem>Install: <InCode>$ brew install tree</InCode></ListItem>
                <ListItem>Show the contents of the current directory as a tree</ListItem>
                <ListItem>
                    Handy flags
                    <List padding="0 0 0 40px">
                        <ListItem padding="0 0 5px 0"><InCode>-d</InCode> - Show dirs only</ListItem>
                        <ListItem padding="0 0 5px 0"><InCode>-a</InCode> - Show hidden files</ListItem>
                        <ListItem><InCode>-L num</InCode> - num is the depth of the tree</ListItem>
                    </List>
                </ListItem>
                <Appear>
                    <ListItem>Demo...</ListItem>
                </Appear>
            </List>
        </Slide>
        <Slide progressColor="quartenary">
            <Heading size={2} textColor="tertiary">Search - find</Heading>
            <List>
                <ListItem><InCode>find</InCode> comes pre installed on unix</ListItem>
                <ListItem>On windows the <InCode>dir</InCode> command is the equivalent</ListItem>
                <ListItem>Find files unders the given directory tree, recursively</ListItem>
                <Appear>
                    <div>
                        <ListItem>
                            Usage
                            <List padding="0 0 0 40px">
                                <ListItem>Find files by extension:<br /><InCode>$ find root_path -name "*.ext"</InCode></ListItem>
                                <ListItem>Find files matching path pattern:<br /><InCode>$ find root_path -path "**/lib/*"</InCode></ListItem>
                            </List>
                        </ListItem>
                        <ListItem>Demo...</ListItem>
                    </div>
                </Appear>
            </List>
        </Slide>
        <Slide progressColor="quartenary">
            <Heading size={2} textColor="tertiary">Search - "grep"</Heading>
            <Image src={Ag} width="70%" />
            <Image src={Rg} width="70%" />
            <List>
                <ListItem>
                    Install:
                    <List padding="10px 0 10px 40px">
                        <ListItem><InCode style={{fontSize: "2rem"}}>$ brew install the_silver_surfer ripgrep</InCode></ListItem>
                    </List>
                </ListItem>
                <ListItem><InCode>grep</InCode> is a command line search tool</ListItem>
                <ListItem>However grep is slow and not very user friendly</ListItem>
                <ListItem>The Silver Surfer (<InCode>ag</InCode>) and ripgrep (<InCode>rg</InCode>) are two popular, fast, grep replacements with sensible defaults</ListItem>
            </List>
        </Slide>
        <Slide progressColor="quartenary">
            <Heading size={2} textColor="tertiary">Search - "grep"</Heading>
            <List>
                <ListItem>
                    <InCode>ag</InCode> and <InCode>rg</InCode> defaults include
                    <List padding="0 0 0 40px">
                        <ListItem>Ignores VCS dirs by default</ListItem>
                        <ListItem>Ignores <InCode>.gitignored</InCode> files/dirs and hidden/binary files by default</ListItem>
                        <ListItem>Defaults to doing a recursive directory search</ListItem>
                    </List>
                </ListItem>
                <ListItem>More intuitive command line flags/options</ListItem>
                <ListItem>Support config files for global (or project level) customization</ListItem>
                <Appear>
                    <div>
                        <ListItem>Demo...</ListItem>
                        <ListItem><InCode>ag</InCode>/<InCode>rg</InCode> are amazing for editor integrations</ListItem>
                    </div>
                </Appear>
            </List>
        </Slide>
        <Slide progressColor="quartenary">
            <Heading fit textColor="tertiary">Discovery and Search - Summary</Heading>
            <List>
                <ListItem><InCode>tree</InCode> - lets you explore/discover the structure of a directory</ListItem>
                <ListItem><InCode>find</InCode> - lets you search for files within a directory</ListItem>
                <ListItem><InCode>ag</InCode>/<InCode>rg</InCode> - lets you search the contents of files</ListItem>
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
                        <ListItem>Current directory/path (no more <InCode>pwd</InCode>)</ListItem>
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
            <Heading size={2} textColor="tertiary">tldr</Heading>
            <Image src={Tldr} width="70%" />
            <List>
                <ListItem>Install: <InCode>$ brew install tldr</InCode></ListItem>
                <ListItem>Simplied <InCode>man</InCode> pages</ListItem>
                <ListItem>Provides simple explanation of command and shows practical examples</ListItem>
                <ListItem>Usage eg: <InCode>$ tldr tar</InCode> instead of<br /><InCode>$ man tar</InCode></ListItem>
                <Appear>
                    <ListItem>Demo...</ListItem>
                </Appear>
            </List>
        </Slide>
        <Slide progressColor="quartenary">
            <Heading size={2} textColor="tertiary">Aliases</Heading>
            <List>
                <ListItem>Aliases are useful for annoying to type commands or for commands where you always want some setting applied</ListItem>
                <ListItem>Aliases can/should be added to your shell config file so they persist</ListItem>
                <Appear>
                    <ListItem>
                        Examples:
                        <List padding="0 0 0 40px">
                            <ListItem padding="0 0 5px 0"><InCode>alias ll="ls -lhG"</InCode></ListItem>
                            <ListItem padding="0 0 2px 0"><InCode>alias dc="docker-compose"</InCode></ListItem>
                            <ListItem padding="0 0 5px 0"><InCode style={{fontSize: "2.5rem"}}>alias tree="tree -I node_modules"</InCode></ListItem>
                            <ListItem padding="0 0 5px 0"><InCode>alias find="find . -name"</InCode></ListItem>
                            <ListItem>VM ssh commands</ListItem>
                        </List>
                    </ListItem>
                </Appear>
            </List>
        </Slide>
        <Slide progressColor="quartenary">
            <Heading size={2} textColor="tertiary">Functions</Heading>
            <List>
                <ListItem>Functions are a more powerful tool for command modification than aliases</ListItem>
                <ListItem>
                    Examples:
                    <List padding="0 0 0 40px">
                        <ListItem padding="0 0 5px 0"><InCode>mkdir</InCode> and <InCode>cd</InCode> in one
                                <CodePane style={{ fontSize: "30px", paddingTop: "10px" }} lang="javascript" source={`mkcd () {\n\ttest -d "$1" || mkdir "$1" && cd "$1"\n}`} />
                        </ListItem>
                        <Appear>
                            <ListItem padding="0 0 5px 0">Shell into a docker container
                                    <CodePane style={{ fontSize: "30px", paddingTop: "10px" }} lang="javascript" source={`docker-access () {\n\tdocker exec -it "$1" /bin/bash\n}`} />
                            </ListItem>
                        </Appear>
                    </List>
                </ListItem>
            </List>
        </Slide>
        <Slide progressColor="quartenary">
            <Heading size={2} textColor="tertiary">Paste and Copy</Heading>
            <List>
                <ListItem>Mac - <InCode>pbcopy</InCode>, <InCode>pbpaste</InCode></ListItem>
                <ListItem>Unix - <InCode>xclip</InCode></ListItem>
                <ListItem>Windows - <InCode>clip</InCode></ListItem>
                <ListItem>Instead of having to manually select and copy output from a command, just pipe it directly into your clipboard!</ListItem>
                <ListItem>e.g. <InCode>$ cat example.json | pbcopy</InCode></ListItem>
            </List>
        </Slide>
        <Slide progressColor="quartenary">
            <Heading size={2} textColor="tertiary">tmux</Heading>
            <Image src={Tmux} width="70%" />
            <List>
                <ListItem>Install: <InCode>$ brew install tmux</InCode></ListItem>
                <ListItem><InCode>tmux</InCode> is a terminal multiplexer</ListItem>
                <ListItem>Similar to GNU Screen, but newer/better</ListItem>
                <Appear>
                    <div>
                        <ListItem>In laymans terms, it lets you manage multiple sessions within a single terminal window</ListItem>
                        <ListItem>Each session is composed of windows and panes</ListItem>
                    </div>
                </Appear>
            </List>
        </Slide>
        <Slide progressColor="quartenary">
            <Heading size={2} textColor="tertiary">tmux</Heading>
            <List>
                <ListItem>Useful if you work on multiple projects/things that require some set of shells</ListItem>
                <Appear>
                    <ListItem>MUST HAVE if you often work on remote servers!</ListItem>
                </Appear>
                <Appear>
                    <div>
                        <ListItem>Warning: This is not just a command, it is an application. And as such, has a steeper learning curve</ListItem>
                        <ListItem>tmux could easily have a whole hour dedicated to it</ListItem>
                    </div>
                </Appear>
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
                        <ListItem><InCode>sed</InCode>, <InCode>awk</InCode>, <InCode>netstat</InCode>, <InCode>tail</InCode>, <InCode>du</InCode></ListItem> etc
                    </List>
                </ListItem>
                <Appear>
                    <ListItem>
                        Domain specific commands
                        <List padding="0 0 0 40px">
                            <ListItem><InCode>jq</InCode> - Command line JSON processor</ListItem>
                            <ListItem>csvkit - Suite of tools for working with CSV</ListItem>
                            <ListItem>HTTPie (<InCode>http</InCode>) - A user friendly cURL replacement</ListItem>
                            <ListItem><InCode>hub</InCode> - hub helps you win at git</ListItem>
                        </List>
                    </ListItem>
                </Appear>
                <Appear>
                    <ListItem>Theming</ListItem>
                </Appear>
            </List>
        </Slide>
        <Slide bgColor="tertiary">
          <Heading textColor="primary">Thank you</Heading>
        </Slide>
        <Slide progressColor="quartenary">
            <Heading size={2} textColor="tertiary">References</Heading>
            <List>
                <ListItem>
                    CLI tools lists
                    <List padding="0 0 0 40px">
                        <ListItem><a href="https://github.com/alebcay/awesome-shell">github.com/alebcay/awesome-shell</a></ListItem>
                        <ListItem><a style={{fontSize: "2.5rem"}} href="https://github.com/agarrharr/awesome-cli-apps">github.com/agarrharr/awesome-cli-apps</a></ListItem>
                        <ListItem><a href="https://github.com/k4m4/terminals-are-sexy">github.com/k4m4/terminals-are-sexy</a></ListItem>
                    </List>
                </ListItem>
                <ListItem>Tmux intro - <a href="https://hackernoon.com/a-gentle-introduction-to-tmux-8d784c404340">hackernoon.com/a-gentle-introduction-to-tmux-8d784c404340</a></ListItem>
                <ListItem>Blog post - <a href="https://dev.to/sobolevn/instant-100-command-line-productivity-boost">dev.to/sobolevn/instant-100-command-line-productivity-boost</a></ListItem>
                <ListItem>My Dotfiles - <a href="https://github.com/nwaywood/dotfiles">github.com/nwaywood/dotfiles</a></ListItem>
            </List>
        </Slide>
      </Deck>
    );
  }
}

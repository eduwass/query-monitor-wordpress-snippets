# Query Monitor WordPress Snippets

This extension provides useful snippets for debugging with the Query Monitor plugin in WordPress development.

It requires the [Query Monitor plugin](https://wordpress.org/plugins/query-monitor/) to be installed and activated in your WordPress installation.

Note that this extension is not affiliated with the Query Monitor plugin.

## Features

Quickly insert debugging snippets in your PHP code by typing 'qm' to trigger suggestions from Query Monitor WordPress Snippets.

![Demo](https://github.com/eduwass/query-monitor-wordpress-snippets/blob/main/images/preview.gif?raw=true)

| Snippet | Description |
| ------- | ----------- |
| qm/debug | Inserts a debug message in the Query Monitor panel. |
| qm/notice | Inserts a notice message in the Query Monitor panel. |
| qm/warning | Inserts a warning message in the Query Monitor panel. |
| qm/error | Inserts an error message in the Query Monitor panel. |
| qm/critical | Inserts a critical message in the Query Monitor panel. |
| qm/alert | Inserts an alert message in the Query Monitor panel. |
| qm/emergency | Inserts an emergency message in the Query Monitor panel. |
| qm/assert | Inserts an assertion in the Query Monitor panel. |
| qm/assert_msg | Inserts an assertion with a message in the Query Monitor panel. |
| qm/assert_msg_data | Inserts an assertion with a message and data in the Query Monitor panel. |
| qm/start | Starts a timer in the Query Monitor panel. |
| qm/lap | Adds a lap to a timer in the Query Monitor panel. |
| qm/stop | Stops a timer in the Query Monitor panel. |

For more information on what each of these messages do, see the [Query Monitor documentation](https://querymonitor.com/).



## Requirements

This extension requires Visual Studio Code 1.6.0 or higher.

## Known Issues

No known issues at this time.

## Release Notes

### 0.1.0

Add support for `qm/start`, `qm/lap`, and `qm/stop` snippets.
Update README.md.

### 0.0.5

Updated README.md.

### 0.0.1

Initial release of Query Monitor WordPress Snippets.

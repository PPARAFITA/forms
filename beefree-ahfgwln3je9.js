var content = `<!DOCTYPE html>
<html>
<head>
<title></title>
<meta charset="utf-8"/>
<meta content="width=device-width" name="viewport"/>
<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" type="text/css"/>
<link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet" type="text/css"/>
<style>
		.bee-row-1 .bee-col-2 .bee-block-1 li a,
		a,
		body {
			color: #000
		}

		.bee-form .bee-form-row .bee-field button {
			font-size: inherit;
			font-family: inherit
		}

		.bee-button .content,
		.bee-row-23 .bee-col-2 .bee-block-3 .bee-button-container,
		.bee-row-29 .bee-col-4 .bee-block-2 .bee-button-container {
			text-align: center
		}

		body {
			background-color: #fff;
			font-family: Roboto, Tahoma, Verdana, Segoe, sans-serif
		}

		* {
			box-sizing: border-box
		}

		body,
		h1,
		h2,
		h3,
		p {
			margin: 0
		}

		.bee-menu .bee-hamburger-trigger {
			display: none
		}

		.bee-row-content {
			max-width: 900px;
			margin: 0 auto;
			display: flex
		}

		.bee-row-content.reverse,
		.bee-row-content.reverse .bee-col {
			-moz-transform: scale(1, -1);
			-webkit-transform: scale(1, -1);
			-o-transform: scale(1, -1);
			-ms-transform: scale(1, -1);
			transform: scale(1, -1)
		}

		.bee-row-content .bee-col-w2 {
			flex-basis: 17%
		}

		.bee-row-content .bee-col-w3 {
			flex-basis: 25%
		}

		.bee-row-content .bee-col-w4 {
			flex-basis: 33%
		}

		.bee-row-content .bee-col-w5 {
			flex-basis: 42%
		}

		.bee-row-content .bee-col-w6 {
			flex-basis: 50%
		}

		.bee-row-content .bee-col-w8 {
			flex-basis: 67%
		}

		.bee-row-23 .bee-col-2 .bee-block-3 div.label:not(.inline),
		.bee-row-23 .bee-col-2 .bee-block-3 label:not(.inline),
		.bee-row-29 .bee-col-4 .bee-block-2 div.label:not(.inline),
		.bee-row-29 .bee-col-4 .bee-block-2 label:not(.inline),
		.bee-row-content .bee-col-w12 {
			flex-basis: 100%
		}

		.bee-button a,
		.bee-icon .bee-icon-label-right a,
		.bee-menu ul li a {
			text-decoration: none
		}

		.bee-divider,
		.bee-image {
			overflow: auto
		}

		.bee-divider .center,
		.bee-image .bee-center {
			margin: 0 auto
		}

		.bee-row-1 .bee-col-1 .bee-block-1,
		.bee-row-23 .bee-col-1 .bee-block-1,
		.bee-row-26 .bee-col-1 .bee-block-1,
		.bee-row-26 .bee-col-2 .bee-block-1,
		.bee-row-26 .bee-col-3 .bee-block-1,
		.bee-row-29 .bee-col-1 .bee-block-1,
		.bee-row-4 .bee-col-2 .bee-block-1,
		.bee-row-7 .bee-col-1 .bee-block-1,
		.bee-row-7 .bee-col-2 .bee-block-1,
		.bee-row-7 .bee-col-3 .bee-block-1 {
			width: 100%
		}

		.bee-form .bee-form-row .bee-field {
			padding: 3px;
			display: flex;
			flex: 1;
			flex-wrap: wrap;
			align-content: flex-start
		}

		.bee-form .bee-form-row .bee-field input:not([type=checkbox]):not([type=radio]) {
			flex-grow: 1;
			font-family: inherit;
			font-size: inherit
		}

		.bee-form .bee-form-row .bee-field .bee-button-container {
			flex-grow: 1
		}

		.bee-form input[type=color] {
			border: none;
			height: 38px
		}

		.bee-form input[type=color]::-webkit-color-swatch-wrapper {
			margin: 0;
			padding: 2px
		}

		.bee-form input[type=color]::-webkit-color-swatch {
			margin: 0;
			padding: 0
		}

		.bee-icon,
		.bee-icon .bee-icon-image,
		.bee-icon .bee-icon-label-right,
		.bee-menu ul.bee-horizontal li {
			display: inline-block
		}

		.bee-icon {
			vertical-align: middle
		}

		.bee-icon .bee-icon-image {
			vertical-align: middle;
			margin-right: -4px
		}

		.bee-image img {
			display: block;
			width: 100%
		}

		.bee-menu .bee-hamburger-controls {
			cursor: pointer;
			display: inline-block;
			position: relative
		}

		.bee-menu .bee-hamburger-controls span {
			display: block;
			position: absolute;
			top: 50%;
			left: 50%;
			background-size: 100%;
			background-repeat: no-repeat;
			transition: .12s ease-in-out
		}

		.bee-menu ul {
			list-style-type: none;
			margin: 0;
			padding: 0
		}

		.bee-social .icon img {
			max-height: 32px
		}

		.bee-text {
			overflow-wrap: anywhere
		}

		.bee-row-1,
		.bee-row-11 .bee-row-content,
		.bee-row-13 .bee-row-content,
		.bee-row-15 .bee-row-content,
		.bee-row-19 .bee-row-content,
		.bee-row-2 .bee-row-content,
		.bee-row-21 .bee-row-content,
		.bee-row-22 .bee-row-content,
		.bee-row-23 .bee-row-content,
		.bee-row-24 .bee-row-content,
		.bee-row-25,
		.bee-row-26,
		.bee-row-27 .bee-row-content,
		.bee-row-28 .bee-row-content,
		.bee-row-29 .bee-row-content,
		.bee-row-3 .bee-row-content,
		.bee-row-30 .bee-row-content,
		.bee-row-31,
		.bee-row-31 .bee-row-content,
		.bee-row-5 .bee-row-content,
		.bee-row-6,
		.bee-row-7,
		.bee-row-8 .bee-row-content,
		.bee-row-9 .bee-row-content {
			background-repeat: no-repeat
		}

		.bee-row-1 .bee-row-content,
		.bee-row-2,
		.bee-row-25 .bee-row-content,
		.bee-row-26 .bee-row-content,
		.bee-row-27,
		.bee-row-6 .bee-row-content,
		.bee-row-7 .bee-row-content,
		.bee-row-8 {
			background-color: #fff;
			background-repeat: no-repeat
		}

		.bee-row-1 .bee-col-1,
		.bee-row-1 .bee-col-2,
		.bee-row-10 .bee-col-3,
		.bee-row-12 .bee-col-3,
		.bee-row-14 .bee-col-3,
		.bee-row-16 .bee-col-3,
		.bee-row-18 .bee-col-3,
		.bee-row-20 .bee-col-3 {
			padding: 25px 20px 15px
		}

		.bee-row-1 .bee-col-2 .bee-block-1 {
			font-family: inherit;
			font-size: 16px;
			text-align: right
		}

		.bee-row-10 .bee-row-content,
		.bee-row-12 .bee-row-content,
		.bee-row-14 .bee-row-content,
		.bee-row-16 .bee-row-content,
		.bee-row-18 .bee-row-content,
		.bee-row-20 .bee-row-content,
		.bee-row-22,
		.bee-row-23,
		.bee-row-24,
		.bee-row-28,
		.bee-row-29,
		.bee-row-3,
		.bee-row-30,
		.bee-row-4,
		.bee-row-4 .bee-row-content,
		.bee-row-5 {
			background-color: #f4f4f4;
			background-repeat: no-repeat
		}

		.bee-row-4 .bee-col-1 {
			padding: 20px 20px 5px
		}

		.bee-row-4 .bee-col-1 .bee-block-1 {
			padding-top: 25px;
			text-align: center;
			width: 100%
		}

		.bee-row-4 .bee-col-1 .bee-block-2 {
			padding-bottom: 25px;
			padding-top: 25px
		}

		.bee-row-10 .bee-col-3 .bee-block-1,
		.bee-row-12 .bee-col-3 .bee-block-1,
		.bee-row-14 .bee-col-3 .bee-block-1,
		.bee-row-16 .bee-col-3 .bee-block-1,
		.bee-row-18 .bee-col-3 .bee-block-1,
		.bee-row-20 .bee-col-3 .bee-block-1,
		.bee-row-4 .bee-col-1 .bee-block-3 {
			text-align: left
		}

		.bee-row-4 .bee-col-2 {
			padding-bottom: 5px;
			padding-left: 20px;
			padding-right: 20px
		}

		.bee-row-6 .bee-col-1,
		.bee-row-9 .bee-col-1 {
			padding: 60px 20px 40px
		}

		.bee-row-23 .bee-col-2 .bee-block-1,
		.bee-row-25 .bee-col-1 .bee-block-1,
		.bee-row-26 .bee-col-1 .bee-block-3,
		.bee-row-26 .bee-col-2 .bee-block-3,
		.bee-row-26 .bee-col-3 .bee-block-3,
		.bee-row-6 .bee-col-1 .bee-block-1,
		.bee-row-9 .bee-col-1 .bee-block-1 {
			text-align: center;
			width: 100%
		}

		.bee-row-7 .bee-col-1,
		.bee-row-7 .bee-col-3 {
			background-color: #f4f4f4;
			padding: 20px
		}

		.bee-row-7 .bee-col-1 .bee-block-2,
		.bee-row-7 .bee-col-2 .bee-block-2,
		.bee-row-7 .bee-col-3 .bee-block-2 {
			padding-top: 10px;
			text-align: center;
			width: 100%
		}

		.bee-row-10 .bee-col-2 .bee-block-1,
		.bee-row-12 .bee-col-2 .bee-block-1,
		.bee-row-14 .bee-col-2 .bee-block-1,
		.bee-row-16 .bee-col-2 .bee-block-1,
		.bee-row-18 .bee-col-2 .bee-block-1,
		.bee-row-20 .bee-col-2 .bee-block-1,
		.bee-row-23 .bee-col-2 .bee-block-2,
		.bee-row-29 .bee-col-1 .bee-block-2,
		.bee-row-29 .bee-col-1 .bee-block-3,
		.bee-row-7 .bee-col-1 .bee-block-3,
		.bee-row-7 .bee-col-2 .bee-block-3,
		.bee-row-7 .bee-col-3 .bee-block-3 {
			padding-top: 15px
		}

		.bee-row-7 .bee-col-1 .bee-block-4,
		.bee-row-7 .bee-col-2 .bee-block-4,
		.bee-row-7 .bee-col-3 .bee-block-4 {
			padding-top: 15px;
			text-align: center
		}

		.bee-row-23 .bee-col-1,
		.bee-row-23 .bee-col-2,
		.bee-row-26 .bee-col-1,
		.bee-row-26 .bee-col-2,
		.bee-row-26 .bee-col-3,
		.bee-row-29 .bee-col-1,
		.bee-row-29 .bee-col-3,
		.bee-row-29 .bee-col-4,
		.bee-row-7 .bee-col-2 {
			padding: 20px
		}

		.bee-row-10,
		.bee-row-11,
		.bee-row-12,
		.bee-row-13,
		.bee-row-14,
		.bee-row-15,
		.bee-row-16,
		.bee-row-17,
		.bee-row-17 .bee-row-content,
		.bee-row-18,
		.bee-row-19,
		.bee-row-20,
		.bee-row-21,
		.bee-row-9 {
			background-color: #4d61fc;
			background-repeat: no-repeat
		}

		.bee-row-10 .bee-col-1,
		.bee-row-10 .bee-col-2,
		.bee-row-12 .bee-col-1,
		.bee-row-12 .bee-col-2,
		.bee-row-14 .bee-col-1,
		.bee-row-14 .bee-col-2,
		.bee-row-16 .bee-col-1,
		.bee-row-16 .bee-col-2,
		.bee-row-18 .bee-col-1,
		.bee-row-18 .bee-col-2,
		.bee-row-20 .bee-col-1,
		.bee-row-20 .bee-col-2 {
			padding: 15px 20px
		}

		.bee-row-10 .bee-col-1 .bee-block-1,
		.bee-row-12 .bee-col-1 .bee-block-1,
		.bee-row-14 .bee-col-1 .bee-block-1,
		.bee-row-16 .bee-col-1 .bee-block-1,
		.bee-row-18 .bee-col-1 .bee-block-1,
		.bee-row-20 .bee-col-1 .bee-block-1 {
			font-family: Oswald, Arial, 'Helvetica Neue', Helvetica, sans-serif;
			font-size: 30px;
			text-align: left
		}

		.bee-row-23 .bee-col-2 .bee-block-3 {
			font-family: Oswald, Arial, 'Helvetica Neue', Helvetica, sans-serif;
			font-size: 16px;
			padding-top: 25px;
			text-align: left;
			width: 100%
		}

		.bee-row-25 .bee-col-1 {
			padding: 60px 20px 20px
		}

		.bee-row-26 .bee-col-1 .bee-block-2,
		.bee-row-26 .bee-col-2 .bee-block-2,
		.bee-row-26 .bee-col-3 .bee-block-2 {
			padding-bottom: 5px;
			padding-top: 20px
		}

		.bee-row-26 .bee-col-1 .bee-block-4,
		.bee-row-26 .bee-col-2 .bee-block-4,
		.bee-row-26 .bee-col-3 .bee-block-4 {
			padding-bottom: 20px;
			padding-top: 15px
		}

		.bee-row-29 .bee-col-2 {
			padding: 20px 10px 20px 20px
		}

		.bee-row-29 .bee-col-2 .bee-block-1,
		.bee-row-29 .bee-col-3 .bee-block-1,
		.bee-row-29 .bee-col-4 .bee-block-1 {
			padding-bottom: 15px;
			text-align: center;
			width: 100%
		}

		.bee-row-29 .bee-col-2 .bee-block-2,
		.bee-row-29 .bee-col-3 .bee-block-2 {
			color: #393d47;
			font-family: inherit;
			font-size: 16px;
			text-align: left
		}

		.bee-row-29 .bee-col-2 .bee-block-3 {
			padding-top: 15px;
			text-align: left
		}

		.bee-row-29 .bee-col-4 .bee-block-2 {
			font-family: Oswald, Arial, 'Helvetica Neue', Helvetica, sans-serif;
			font-size: 16px;
			text-align: center;
			width: 100%;
			margin: 0 auto
		}

		.bee-row-29 .bee-col-2 .bee-block-2 li,
		.bee-row-29 .bee-col-3 .bee-block-2 li,
		.bee-row-31 .bee-col-1 {
			padding-bottom: 5px;
			padding-top: 5px
		}

		.bee-row-31 .bee-col-1 .bee-block-1 {
			color: #9d9d9d;
			font-family: inherit;
			font-size: 15px;
			padding-bottom: 5px;
			padding-top: 5px;
			text-align: center
		}

		.bee-row-1 .bee-col-2 .bee-block-1 li {
			padding-left: 20px;
			padding-right: 20px;
			padding-top: 10px
		}

		.bee-row-10 .bee-col-1 .bee-block-1 .bee-icon-image,
		.bee-row-12 .bee-col-1 .bee-block-1 .bee-icon-image,
		.bee-row-14 .bee-col-1 .bee-block-1 .bee-icon-image,
		.bee-row-16 .bee-col-1 .bee-block-1 .bee-icon-image,
		.bee-row-18 .bee-col-1 .bee-block-1 .bee-icon-image,
		.bee-row-20 .bee-col-1 .bee-block-1 .bee-icon-image {
			padding: 5px 20px 5px 5px
		}

		.bee-row-10 .bee-col-1 .bee-block-1 .bee-icon:not(:last-child),
		.bee-row-12 .bee-col-1 .bee-block-1 .bee-icon:not(:last-child),
		.bee-row-14 .bee-col-1 .bee-block-1 .bee-icon:not(:last-child),
		.bee-row-16 .bee-col-1 .bee-block-1 .bee-icon:not(:last-child),
		.bee-row-18 .bee-col-1 .bee-block-1 .bee-icon:not(:last-child),
		.bee-row-20 .bee-col-1 .bee-block-1 .bee-icon:not(:last-child) {
			margin-right: -4px
		}

		.bee-row-31 .bee-col-1 .bee-block-1 .bee-icon-image {
			padding: 5px 6px 5px 5px
		}

		.bee-row-31 .bee-col-1 .bee-block-1 .bee-icon {
			margin-left: 0;
			margin-right: 0
		}

		.bee-row-29 .bee-col-2 .bee-block-2 li a,
		.bee-row-29 .bee-col-3 .bee-block-2 li a {
			color: #393d47
		}

		@media (max-width:768px) {
			.bee-form {
				width: 100% !important
			}

			.bee-menu ul.with-bee-hamburger {
				display: none;
				padding: 5px 0;
				position: relative;
				top: -4px
			}

			.bee-menu ul.with-bee-hamburger li {
				display: block;
				text-align: center
			}

			.bee-menu ul.with-bee-hamburger li a {
				text-decoration: none
			}

			.bee-menu ul.with-bee-hamburger span {
				display: none
			}

			#bee-hamburger-m2wano9:checked~ul,
			.bee-row-content:not(.no_stack) {
				display: block
			}

			.bee-row-1 .bee-col-2 .bee-block-1 .bee-hamburger-controls {
				width: 36px;
				height: 36px;
				background-color: #fff;
				border-radius: 0
			}

			.bee-row-1 .bee-col-2 .bee-block-1 .bee-hamburger-controls span,
			.bee-row-29 .bee-col-2 .bee-block-2 .bee-hamburger-controls span,
			.bee-row-29 .bee-col-3 .bee-block-2 .bee-hamburger-controls span {
				width: 18px;
				height: 18px
			}

			.bee-row-1 .bee-col-2 .bee-block-1 .bee-hamburger-controls span.bee-hamburger-open,
			.bee-row-29 .bee-col-2 .bee-block-2 .bee-hamburger-controls span.bee-hamburger-open,
			.bee-row-29 .bee-col-3 .bee-block-2 .bee-hamburger-controls span.bee-hamburger-open {
				background-image: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjY0IiB2aWV3Qm94PSIwIDAgNjQgNjQiIHdpZHRoPSI2NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjMDAwMDAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxyZWN0IGhlaWdodD0iMTIiIHJ4PSI2IiB3aWR0aD0iNjQiLz48cmVjdCBoZWlnaHQ9IjEyIiByeD0iNiIgd2lkdGg9IjY0IiB5PSI1MiIvPjxyZWN0IGhlaWdodD0iMTIiIHJ4PSI2IiB3aWR0aD0iNjQiIHk9IjI2Ii8+PC9nPjwvc3ZnPg==);
				transform: translate(-50%, -50%) scaleY(1)
			}

			.bee-row-1 .bee-col-2 .bee-block-1 .bee-hamburger-controls span.bee-hamburger-close,
			.bee-row-29 .bee-col-2 .bee-block-2 .bee-hamburger-controls span.bee-hamburger-close,
			.bee-row-29 .bee-col-3 .bee-block-2 .bee-hamburger-controls span.bee-hamburger-close {
				background-image: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjY0IiB2aWV3Qm94PSIwIDAgNjQgNjQiIHdpZHRoPSI2NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjMDAwMDAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxyZWN0IGhlaWdodD0iMTIiIHJ4PSI2IiB0cmFuc2Zvcm09Im1hdHJpeCgtLjcwNzEwNjc4IC0uNzA3MTA2NzggLjcwNzEwNjc4IC0uNzA3MTA2NzggMzEuOTkxMzc4IDc3LjIzNDAxOSkiIHdpZHRoPSI4MiIgeD0iLTkuMDA4NjIyIiB5PSIyNS45OTEzNzgiLz48cmVjdCBoZWlnaHQ9IjEyIiByeD0iNiIgdHJhbnNmb3JtPSJtYXRyaXgoLS43MDcxMDY3OCAuNzA3MTA2NzggLS43MDcxMDY3OCAtLjcwNzEwNjc4IDc3LjgxOTgwNiAzMi4yMzQwMTkpIiB3aWR0aD0iODIiIHg9Ii04Ljc2NTk4MSIgeT0iMjYuMjM0MDE5Ii8+PC9nPjwvc3ZnPg==);
				transform: translate(-50%, -50%) scaleY(0)
			}

			.bee-row-1 .bee-col-2 .bee-block-1 ul.with-bee-hamburger {
				background-color: #fff
			}

			.bee-row-1 .bee-col-2 .bee-block-1 ul.with-bee-hamburger li,
			.bee-row-1 .bee-col-2 .bee-block-1 ul.with-bee-hamburger li a,
			.bee-row-29 .bee-col-2 .bee-block-2 ul.with-bee-hamburger li,
			.bee-row-29 .bee-col-2 .bee-block-2 ul.with-bee-hamburger li a,
			.bee-row-29 .bee-col-3 .bee-block-2 ul.with-bee-hamburger li,
			.bee-row-29 .bee-col-3 .bee-block-2 ul.with-bee-hamburger li a {
				color: #000
			}

			#bee-hamburger-m2wano9:checked~.bee-hamburger-controls .bee-hamburger-open {
				transform: translate(-50%, -50%) scaleY(0)
			}

			#bee-hamburger-m2wano9:checked~.bee-hamburger-controls .bee-hamburger-close {
				transform: translate(-50%, -50%) scaleY(1)
			}

			.bee-row-29 .bee-col-2 .bee-block-2 .bee-hamburger-controls,
			.bee-row-29 .bee-col-3 .bee-block-2 .bee-hamburger-controls {
				width: 36px;
				height: 36px;
				background-color: #d7fff3;
				border-radius: 50%
			}

			.bee-row-29 .bee-col-2 .bee-block-2 ul.with-bee-hamburger,
			.bee-row-29 .bee-col-3 .bee-block-2 ul.with-bee-hamburger {
				background-color: #d7fff3
			}
		}

		.bee-row-29 .bee-col-4 .bee-block-2 div.label,
		.bee-row-29 .bee-col-4 .bee-block-2 label {
			line-height: 200%;
			text-align: left;
			display: block
		}

		.bee-row-23 .bee-col-2 .bee-block-3 div.label,
		.bee-row-29 .bee-col-4 .bee-block-2 div.label {
			padding: 3px
		}

		.bee-row-29 .bee-col-4 .bee-block-2 input:not([type=checkbox]):not([type=radio]):not([type=image]) {
			background-color: #fff;
			border-bottom: 0 solid #111;
			border-left: 0 solid #111;
			border-radius: 0;
			border-right: 0 solid #111;
			border-top: 0 solid #111;
			padding: 5px
		}

		.bee-row-29 .bee-col-4 .bee-block-2 input:not([type=checkbox]):not([type=radio]):focus {
			outline-color: #4d61fc
		}

		.bee-row-29 .bee-col-4 .bee-block-2 button {
			background-color: #4d61fc;
			border-bottom: 0 solid transparent;
			border-left: 0 solid transparent;
			border-radius: 0;
			border-right: 0 solid transparent;
			border-top: 0 solid transparent;
			color: #fff;
			letter-spacing: normal;
			line-height: 200%;
			width: 100%;
			padding: 5px 20px
		}

		.bee-row-23 .bee-col-2 .bee-block-3 div.label,
		.bee-row-23 .bee-col-2 .bee-block-3 label {
			color: #393d47;
			line-height: 200%;
			text-align: left;
			display: block
		}

		.bee-row-23 .bee-col-2 .bee-block-3 input:not([type=checkbox]):not([type=radio]):not([type=image]) {
			background-color: #fff;
			border-bottom: 1px solid transparent;
			border-left: 1px solid transparent;
			border-radius: 0;
			border-right: 1px solid transparent;
			border-top: 1px solid transparent;
			padding: 5px
		}

		.bee-row-23 .bee-col-2 .bee-block-3 input:not([type=checkbox]):not([type=radio]):focus {
			outline-color: #3aaee0
		}

		.bee-row-23 .bee-col-2 .bee-block-3 button {
			background-color: #4d61fc;
			border-bottom: 0 solid transparent;
			border-left: 0 solid transparent;
			border-radius: 0;
			border-right: 0 solid transparent;
			border-top: 0 solid transparent;
			color: #fff;
			line-height: 200%;
			width: 100%;
			padding: 5px 20px
		}
	</style>
</head>
<body>
<div class="bee-page-container">
<div class="bee-row bee-row-1">
<div class="bee-row-content no_stack">
<div class="bee-col bee-col-1 bee-col-w4">
<div class="bee-block bee-block-1 bee-image"><img alt="Logo" class="bee-fixedwidth" src="images/logo.png" style="max-width:234px;"/></div>
</div>
<div class="bee-col bee-col-2 bee-col-w8">
<div class="bee-block bee-block-1 bee-menu">
<nav class="bee-menu"><input class="bee-hamburger-trigger" id="bee-hamburger-m2wano9" type="checkbox"/><label class="bee-hamburger-controls" for="bee-hamburger-m2wano9"><span class="bee-hamburger-open"></span><span class="bee-hamburger-close"></span></label>
<ul class="bee-horizontal with-bee-hamburger">
<li><a href="http://www.example.com/" target="_self" title="">About</a></li>
<li><a href="http://www.example.com/" target="_self" title="">News</a></li>
<li><a href="http://www.example.com/" target="_self" title="">Blog</a></li>
<li><a href="http://www.example.com/" target="_self" title="">FAQ</a></li>
</ul>
</nav>
</div>
</div>
</div>
</div>
<div class="bee-row bee-row-2">
<div class="bee-row-content">
<div class="bee-col bee-col-1 bee-col-w12">
<div class="bee-block bee-block-1 bee-divider">
<div class="spacer" style="height:15px;"></div>
</div>
</div>
</div>
</div>
<div class="bee-row bee-row-3">
<div class="bee-row-content">
<div class="bee-col bee-col-1 bee-col-w12">
<div class="bee-block bee-block-1 bee-divider">
<div class="spacer" style="height:30px;"></div>
</div>
</div>
</div>
</div>
<div class="bee-row bee-row-4">
<div class="bee-row-content reverse">
<div class="bee-col bee-col-1 bee-col-w6">
<div class="bee-block bee-block-1 bee-heading">
<h1 style="color:#000000;direction:ltr;font-family:'Oswald', Arial, 'Helvetica Neue', Helvetica, sans-serif;font-size:52px;font-weight:normal;letter-spacing:normal;line-height:120%;text-align:left;margin-top:0;margin-bottom:0;">Crypto Market </h1>
</div>
<div class="bee-block bee-block-2 bee-text">
<div class="bee-text-content" style="font-size: 14px; line-height: 150%; color: #393d47; font-family: inherit;">
<p style="font-size: 14px; line-height: 21px; text-align: left;"><span style="font-size: 16px; line-height: 24px;">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</span></p>
</div>
</div>
<div class="bee-block bee-block-3 bee-button"><a class="bee-button-content" href="http://www.example.com/" style="font-size: 12px; line-height: 24px; font-family: 'Oswald', Arial, 'Helvetica Neue', Helvetica, sans-serif; background-color: #4d61fc; border-bottom: 0px solid #8a3b8f; border-left: 0px solid #8a3b8f; border-radius: 0px; border-right: 0px solid #8a3b8f; border-top: 0px solid #8a3b8f; color: #ffffff; max-width: 100%; padding-bottom: 5px; padding-left: 20px; padding-right: 20px; padding-top: 5px; width: auto; display: inline-block;"><span style="font-size: 16px; line-height: 200%; word-break: break-word;"><span style="font-size: 22px; line-height: 44px;">LEARN MORE</span></span></a></div>
</div>
<div class="bee-col bee-col-2 bee-col-w6">
<div class="bee-block bee-block-1 bee-image"><img alt="Cryptocurrency analytics" class="bee-center bee-autowidth" src="images/main.png" style="max-width:410px;"/></div>
</div>
</div>
</div>
<div class="bee-row bee-row-5">
<div class="bee-row-content">
<div class="bee-col bee-col-1 bee-col-w12">
<div class="bee-block bee-block-1 bee-divider">
<div class="spacer" style="height:40px;"></div>
</div>
</div>
</div>
</div>
<div class="bee-row bee-row-6">
<div class="bee-row-content">
<div class="bee-col bee-col-1 bee-col-w12">
<div class="bee-block bee-block-1 bee-heading">
<h2 style="color:#000000;direction:ltr;font-family:'Oswald', Arial, 'Helvetica Neue', Helvetica, sans-serif;font-size:40px;font-weight:normal;letter-spacing:normal;line-height:120%;text-align:center;margin-top:0;margin-bottom:0;">Top 3 Cryptocurrencies </h2>
</div>
</div>
</div>
</div>
<div class="bee-row bee-row-7">
<div class="bee-row-content">
<div class="bee-col bee-col-1 bee-col-w4">
<div class="bee-block bee-block-1 bee-image"><img alt="" class="bee-center bee-fixedwidth" src="images/bitcoin.png" style="max-width:91px;"/></div>
<div class="bee-block bee-block-2 bee-heading">
<h3 style="color:#000000;direction:ltr;font-family:'Oswald', Arial, 'Helvetica Neue', Helvetica, sans-serif;font-size:24px;font-weight:normal;letter-spacing:normal;line-height:120%;text-align:center;margin-top:0;margin-bottom:0;"><strong>Bitcoin</strong> </h3>
</div>
<div class="bee-block bee-block-3 bee-text">
<div class="bee-text-content" style="font-size: 14px; line-height: 150%; color: #393d47; font-family: inherit;">
<p style="font-size: 14px; line-height: 21px; text-align: center;"><span style="font-size: 16px; line-height: 24px;">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</span></p>
</div>
</div>
<div class="bee-block bee-block-4 bee-button"><a class="bee-button-content" href="http://www.example.com/" style="font-size: 12px; line-height: 24px; font-family: 'Oswald', Arial, 'Helvetica Neue', Helvetica, sans-serif; background-color: #4d61fc; border-bottom: 0px solid #8a3b8f; border-left: 0px solid #8a3b8f; border-radius: 0px; border-right: 0px solid #8a3b8f; border-top: 0px solid #8a3b8f; color: #ffffff; max-width: 100%; padding-bottom: 5px; padding-left: 40px; padding-right: 40px; padding-top: 5px; width: auto; display: inline-block;"><span style="font-size: 16px; line-height: 200%; word-break: break-word;"><span style="font-size: 22px; line-height: 44px;">BUY</span></span></a></div>
</div>
<div class="bee-col bee-col-2 bee-col-w4">
<div class="bee-block bee-block-1 bee-image"><img alt="" class="bee-center bee-fixedwidth" src="images/ethereum.png" style="max-width:91px;"/></div>
<div class="bee-block bee-block-2 bee-heading">
<h3 style="color:#000000;direction:ltr;font-family:'Oswald', Arial, 'Helvetica Neue', Helvetica, sans-serif;font-size:24px;font-weight:normal;letter-spacing:normal;line-height:120%;text-align:center;margin-top:0;margin-bottom:0;"><strong>Ethereum</strong> </h3>
</div>
<div class="bee-block bee-block-3 bee-text">
<div class="bee-text-content" style="font-size: 14px; line-height: 150%; color: #393d47; font-family: inherit;">
<p style="font-size: 14px; line-height: 21px; text-align: center;"><span style="font-size: 16px; line-height: 24px;">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</span></p>
</div>
</div>
<div class="bee-block bee-block-4 bee-button"><a class="bee-button-content" href="http://www.example.com/" style="font-size: 12px; line-height: 24px; font-family: 'Oswald', Arial, 'Helvetica Neue', Helvetica, sans-serif; background-color: #4d61fc; border-bottom: 0px solid #8a3b8f; border-left: 0px solid #8a3b8f; border-radius: 0px; border-right: 0px solid #8a3b8f; border-top: 0px solid #8a3b8f; color: #ffffff; max-width: 100%; padding-bottom: 5px; padding-left: 40px; padding-right: 40px; padding-top: 5px; width: auto; display: inline-block;"><span style="font-size: 16px; line-height: 200%; word-break: break-word;"><span style="font-size: 22px; line-height: 44px;">BUY</span></span></a></div>
</div>
<div class="bee-col bee-col-3 bee-col-w4">
<div class="bee-block bee-block-1 bee-image"><img alt="" class="bee-center bee-fixedwidth" src="images/monero.png" style="max-width:91px;"/></div>
<div class="bee-block bee-block-2 bee-heading">
<h3 style="color:#000000;direction:ltr;font-family:'Oswald', Arial, 'Helvetica Neue', Helvetica, sans-serif;font-size:24px;font-weight:normal;letter-spacing:normal;line-height:120%;text-align:center;margin-top:0;margin-bottom:0;"><strong>Monero</strong> </h3>
</div>
<div class="bee-block bee-block-3 bee-text">
<div class="bee-text-content" style="font-size: 14px; line-height: 150%; color: #393d47; font-family: inherit;">
<p style="font-size: 14px; line-height: 21px; text-align: center;"><span style="font-size: 16px; line-height: 24px;">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</span></p>
</div>
</div>
<div class="bee-block bee-block-4 bee-button"><a class="bee-button-content" href="http://www.example.com/" style="font-size: 12px; line-height: 24px; font-family: 'Oswald', Arial, 'Helvetica Neue', Helvetica, sans-serif; background-color: #4d61fc; border-bottom: 0px solid #8a3b8f; border-left: 0px solid #8a3b8f; border-radius: 0px; border-right: 0px solid #8a3b8f; border-top: 0px solid #8a3b8f; color: #ffffff; max-width: 100%; padding-bottom: 5px; padding-left: 40px; padding-right: 40px; padding-top: 5px; width: auto; display: inline-block;"><span style="font-size: 16px; line-height: 200%; word-break: break-word;"><span style="font-size: 22px; line-height: 44px;">BUY</span></span></a></div>
</div>
</div>
</div>
<div class="bee-row bee-row-8">
<div class="bee-row-content">
<div class="bee-col bee-col-1 bee-col-w12">
<div class="bee-block bee-block-1 bee-divider">
<div class="spacer" style="height:60px;"></div>
</div>
</div>
</div>
</div>
<div class="bee-row bee-row-9">
<div class="bee-row-content">
<div class="bee-col bee-col-1 bee-col-w12">
<div class="bee-block bee-block-1 bee-heading">
<h2 style="color:#ffffff;direction:ltr;font-family:'Oswald', Arial, 'Helvetica Neue', Helvetica, sans-serif;font-size:40px;font-weight:normal;letter-spacing:normal;line-height:120%;text-align:center;margin-top:0;margin-bottom:0;">Cryptocurrency Prices </h2>
</div>
</div>
</div>
</div>
<div class="bee-row bee-row-10">
<div class="bee-row-content">
<div class="bee-col bee-col-1 bee-col-w4">
<div class="bee-block bee-block-1 bee-icons">
<div class="bee-icon">
<div class="bee-icon-image"><img alt="" height="64px" src="images/bitcoin.png" width="auto"/></div>
<div class="bee-icon-label-right">Bitcoin</div>
</div>
</div>
</div>
<div class="bee-col bee-col-2 bee-col-w5">
<div class="bee-block bee-block-1 bee-text">
<div class="bee-text-content" style="font-size: 12px; line-height: 120%; font-family: inherit; color: #393d47;">
<p style="font-size: 12px; line-height: 14px; text-align: left;"><span style="font-size: 30px; line-height: 36px;"><span style="color: #000000; font-size: 28px; line-height: 33px;">$33,637.00</span><sup style=""> <span style="color: #00af0f; font-size: 20px; line-height: 24px;">+2,5%</span></sup></span></p>
</div>
</div>
</div>
<div class="bee-col bee-col-3 bee-col-w3">
<div class="bee-block bee-block-1 bee-button"><a class="bee-button-content" href="http://www.example.com/" style="font-size: 12px; line-height: 24px; font-family: 'Oswald', Arial, 'Helvetica Neue', Helvetica, sans-serif; background-color: #ffffff; border-bottom: 2px solid #4D61FC; border-left: 2px solid #4D61FC; border-radius: 0px; border-right: 2px solid #4D61FC; border-top: 2px solid #4D61FC; color: #4d61fc; max-width: 100%; padding-bottom: 5px; padding-left: 20px; padding-right: 20px; padding-top: 5px; width: auto; display: inline-block;"><span style="font-size: 16px; line-height: 200%; word-break: break-word;"><span style="font-size: 22px; line-height: 44px;">SELL OR BUY</span></span></a></div>
</div>
</div>
</div>
<div class="bee-row bee-row-11">
<div class="bee-row-content">
<div class="bee-col bee-col-1 bee-col-w12">
<div class="bee-block bee-block-1 bee-divider">
<div class="spacer" style="height:30px;"></div>
</div>
</div>
</div>
</div>
<div class="bee-row bee-row-12">
<div class="bee-row-content">
<div class="bee-col bee-col-1 bee-col-w4">
<div class="bee-block bee-block-1 bee-icons">
<div class="bee-icon">
<div class="bee-icon-image"><img alt="" height="64px" src="images/ethereum.png" width="auto"/></div>
<div class="bee-icon-label-right">Ethereum</div>
</div>
</div>
</div>
<div class="bee-col bee-col-2 bee-col-w5">
<div class="bee-block bee-block-1 bee-text">
<div class="bee-text-content" style="font-size: 12px; line-height: 120%; font-family: inherit; color: #393d47;">
<p style="font-size: 12px; line-height: 14px; text-align: left;"><span style="font-size: 30px; line-height: 36px;"><span style="color: #000000; line-height: 33px; font-size: 28px;">$2,218.49</span><sup style=""> <span style="color: #00af0f; line-height: 24px; font-size: 20px;">+1,05%</span></sup></span></p>
</div>
</div>
</div>
<div class="bee-col bee-col-3 bee-col-w3">
<div class="bee-block bee-block-1 bee-button"><a class="bee-button-content" href="http://www.example.com/" style="font-size: 12px; line-height: 24px; font-family: 'Oswald', Arial, 'Helvetica Neue', Helvetica, sans-serif; background-color: #ffffff; border-bottom: 2px solid #4D61FC; border-left: 2px solid #4D61FC; border-radius: 0px; border-right: 2px solid #4D61FC; border-top: 2px solid #4D61FC; color: #4d61fc; max-width: 100%; padding-bottom: 5px; padding-left: 20px; padding-right: 20px; padding-top: 5px; width: auto; display: inline-block;"><span style="font-size: 16px; line-height: 200%; word-break: break-word;"><span style="font-size: 22px; line-height: 44px;">SELL OR BUY</span></span></a></div>
</div>
</div>
</div>
<div class="bee-row bee-row-13">
<div class="bee-row-content">
<div class="bee-col bee-col-1 bee-col-w12">
<div class="bee-block bee-block-1 bee-divider">
<div class="spacer" style="height:30px;"></div>
</div>
</div>
</div>
</div>
<div class="bee-row bee-row-14">
<div class="bee-row-content">
<div class="bee-col bee-col-1 bee-col-w4">
<div class="bee-block bee-block-1 bee-icons">
<div class="bee-icon">
<div class="bee-icon-image"><img alt="" height="64px" src="images/monero.png" width="auto"/></div>
<div class="bee-icon-label-right">Monero</div>
</div>
</div>
</div>
<div class="bee-col bee-col-2 bee-col-w5">
<div class="bee-block bee-block-1 bee-text">
<div class="bee-text-content" style="font-size: 12px; line-height: 120%; font-family: inherit; color: #393d47;">
<p style="font-size: 12px; line-height: 14px; text-align: left;"><span style="font-size: 30px; line-height: 36px;"><span style="color: #000000; line-height: 33px; font-size: 28px;">$1,232.05</span><sup style=""> <span style="color: #e90036; font-size: 20px; line-height: 24px;">-<span style="line-height: 14px;">1,05%</span></span></sup></span></p>
</div>
</div>
</div>
<div class="bee-col bee-col-3 bee-col-w3">
<div class="bee-block bee-block-1 bee-button"><a class="bee-button-content" href="http://www.example.com/" style="font-size: 12px; line-height: 24px; font-family: 'Oswald', Arial, 'Helvetica Neue', Helvetica, sans-serif; background-color: #ffffff; border-bottom: 2px solid #4D61FC; border-left: 2px solid #4D61FC; border-radius: 0px; border-right: 2px solid #4D61FC; border-top: 2px solid #4D61FC; color: #4d61fc; max-width: 100%; padding-bottom: 5px; padding-left: 20px; padding-right: 20px; padding-top: 5px; width: auto; display: inline-block;"><span style="font-size: 16px; line-height: 200%; word-break: break-word;"><span style="font-size: 22px; line-height: 44px;">SELL OR BUY</span></span></a></div>
</div>
</div>
</div>
<div class="bee-row bee-row-15">
<div class="bee-row-content">
<div class="bee-col bee-col-1 bee-col-w12">
<div class="bee-block bee-block-1 bee-divider">
<div class="spacer" style="height:30px;"></div>
</div>
</div>
</div>
</div>
<div class="bee-row bee-row-16">
<div class="bee-row-content">
<div class="bee-col bee-col-1 bee-col-w4">
<div class="bee-block bee-block-1 bee-icons">
<div class="bee-icon">
<div class="bee-icon-image"><img alt="" height="64px" src="images/iota.png" width="auto"/></div>
<div class="bee-icon-label-right">Iota</div>
</div>
</div>
</div>
<div class="bee-col bee-col-2 bee-col-w5">
<div class="bee-block bee-block-1 bee-text">
<div class="bee-text-content" style="font-size: 12px; line-height: 120%; font-family: inherit; color: #393d47;">
<p style="font-size: 12px; line-height: 14px; text-align: left;"><span style="font-size: 30px; line-height: 36px;"><span style="color: #000000; line-height: 33px; font-size: 28px;">$8,106.00</span><sup style=""> <span style="color: #00af0f; line-height: 24px; font-size: 20px;">+1,02%</span></sup></span></p>
</div>
</div>
</div>
<div class="bee-col bee-col-3 bee-col-w3">
<div class="bee-block bee-block-1 bee-button"><a class="bee-button-content" href="http://www.example.com/" style="font-size: 12px; line-height: 24px; font-family: 'Oswald', Arial, 'Helvetica Neue', Helvetica, sans-serif; background-color: #ffffff; border-bottom: 2px solid #4D61FC; border-left: 2px solid #4D61FC; border-radius: 0px; border-right: 2px solid #4D61FC; border-top: 2px solid #4D61FC; color: #4d61fc; max-width: 100%; padding-bottom: 5px; padding-left: 20px; padding-right: 20px; padding-top: 5px; width: auto; display: inline-block;"><span style="font-size: 16px; line-height: 200%; word-break: break-word;"><span style="font-size: 22px; line-height: 44px;">SELL OR BUY</span></span></a></div>
</div>
</div>
</div>
<div class="bee-row bee-row-17">
<div class="bee-row-content">
<div class="bee-col bee-col-1 bee-col-w12">
<div class="bee-block bee-block-1 bee-divider">
<div class="spacer" style="height:30px;"></div>
</div>
</div>
</div>
</div>
<div class="bee-row bee-row-18">
<div class="bee-row-content">
<div class="bee-col bee-col-1 bee-col-w4">
<div class="bee-block bee-block-1 bee-icons">
<div class="bee-icon">
<div class="bee-icon-image"><img alt="" height="64px" src="images/litecoin.png" width="auto"/></div>
<div class="bee-icon-label-right">Litecoin</div>
</div>
</div>
</div>
<div class="bee-col bee-col-2 bee-col-w5">
<div class="bee-block bee-block-1 bee-text">
<div class="bee-text-content" style="font-size: 12px; line-height: 120%; font-family: inherit; color: #393d47;">
<p style="font-size: 12px; line-height: 14px; text-align: left;"><span style="font-size: 30px; line-height: 36px;"><span style="color: #000000; line-height: 33px; font-size: 28px;">$7,500.00</span><sup style=""> <span style="color: #e90036; line-height: 24px; font-size: 20px;">-<span style="line-height: 14px;">1,05%</span></span></sup></span></p>
</div>
</div>
</div>
<div class="bee-col bee-col-3 bee-col-w3">
<div class="bee-block bee-block-1 bee-button"><a class="bee-button-content" href="http://www.example.com/" style="font-size: 12px; line-height: 24px; font-family: 'Oswald', Arial, 'Helvetica Neue', Helvetica, sans-serif; background-color: #ffffff; border-bottom: 2px solid #4D61FC; border-left: 2px solid #4D61FC; border-radius: 0px; border-right: 2px solid #4D61FC; border-top: 2px solid #4D61FC; color: #4d61fc; max-width: 100%; padding-bottom: 5px; padding-left: 20px; padding-right: 20px; padding-top: 5px; width: auto; display: inline-block;"><span style="font-size: 16px; line-height: 200%; word-break: break-word;"><span style="font-size: 22px; line-height: 44px;">SELL OR BUY</span></span></a></div>
</div>
</div>
</div>
<div class="bee-row bee-row-19">
<div class="bee-row-content">
<div class="bee-col bee-col-1 bee-col-w12">
<div class="bee-block bee-block-1 bee-divider">
<div class="spacer" style="height:30px;"></div>
</div>
</div>
</div>
</div>
<div class="bee-row bee-row-20">
<div class="bee-row-content">
<div class="bee-col bee-col-1 bee-col-w4">
<div class="bee-block bee-block-1 bee-icons">
<div class="bee-icon">
<div class="bee-icon-image"><img alt="" height="64px" src="images/huobi.png" width="auto"/></div>
<div class="bee-icon-label-right">Huobi</div>
</div>
</div>
</div>
<div class="bee-col bee-col-2 bee-col-w5">
<div class="bee-block bee-block-1 bee-text">
<div class="bee-text-content" style="font-size: 12px; line-height: 120%; font-family: inherit; color: #393d47;">
<p style="font-size: 12px; line-height: 14px; text-align: left;"><span style="font-size: 30px; line-height: 36px;"><span style="color: #000000; line-height: 33px; font-size: 28px;">$2,030.31</span><sup style=""> <span style="color: #00af0f; line-height: 24px; font-size: 20px;">+1,43%</span></sup></span></p>
</div>
</div>
</div>
<div class="bee-col bee-col-3 bee-col-w3">
<div class="bee-block bee-block-1 bee-button"><a class="bee-button-content" href="http://www.example.com/" style="font-size: 12px; line-height: 24px; font-family: 'Oswald', Arial, 'Helvetica Neue', Helvetica, sans-serif; background-color: #ffffff; border-bottom: 2px solid #4D61FC; border-left: 2px solid #4D61FC; border-radius: 0px; border-right: 2px solid #4D61FC; border-top: 2px solid #4D61FC; color: #4d61fc; max-width: 100%; padding-bottom: 5px; padding-left: 20px; padding-right: 20px; padding-top: 5px; width: auto; display: inline-block;"><span style="font-size: 16px; line-height: 200%; word-break: break-word;"><span style="font-size: 22px; line-height: 44px;">SELL OR BUY</span></span></a></div>
</div>
</div>
</div>
<div class="bee-row bee-row-21">
<div class="bee-row-content">
<div class="bee-col bee-col-1 bee-col-w12">
<div class="bee-block bee-block-1 bee-divider">
<div class="spacer" style="height:60px;"></div>
</div>
</div>
</div>
</div>
<div class="bee-row bee-row-22">
<div class="bee-row-content">
<div class="bee-col bee-col-1 bee-col-w12">
<div class="bee-block bee-block-1 bee-divider">
<div class="spacer" style="height:40px;"></div>
</div>
</div>
</div>
</div>
<div class="bee-row bee-row-23">
<div class="bee-row-content">
<div class="bee-col bee-col-1 bee-col-w6">
<div class="bee-block bee-block-1 bee-image"><a href="App"><img alt="" class="bee-center bee-autowidth" src="images/app.png" style="max-width:410px;"/></a></div>
</div>
<div class="bee-col bee-col-2 bee-col-w6">
<div class="bee-block bee-block-1 bee-heading">
<h2 style="color:#000000;direction:ltr;font-family:'Oswald', Arial, 'Helvetica Neue', Helvetica, sans-serif;font-size:40px;font-weight:normal;letter-spacing:normal;line-height:120%;text-align:left;margin-top:0;margin-bottom:0;">Track your wallet </h2>
</div>
<div class="bee-block bee-block-2 bee-text">
<div class="bee-text-content" style="font-size: 14px; line-height: 150%; color: #393d47; font-family: inherit;">
<p style="font-size: 14px; line-height: 21px; text-align: left;"><span style="font-size: 16px; line-height: 24px;">Sign up and track your cryptocurrency wallet.</span></p>
</div>
</div>
<div class="bee-block bee-block-3 bee-form">
<form accept-charset="UTF-8" action="ACTION_PLACEHOLDER" autocomplete="on" enctype="multipart/form-data" method="post" target="_self">
<div class="bee-form-row">
<div class="bee-field bee-field-id_e1vhiv"><label for="id_e1vhiv">First Name</label><input id="id_e1vhiv" name="firstname" required="" type="text"/></div>
</div>
<div class="bee-form-row">
<div class="bee-field bee-field-id_kodsbf"><label for="id_kodsbf">Last Name</label><input id="id_kodsbf" name="lastname" required="" type="text"/></div>
</div>
<div class="bee-form-row">
<div class="bee-field bee-field-id_jc47tu"><label for="id_jc47tu">Email</label><input id="id_jc47tu" name="email" required="" type="email"/></div>
</div>
<div class="bee-form-row"></div>
<div class="bee-form-row"></div>
<div class="bee-form-row"></div>
<div class="bee-form-row"></div>
<div class="bee-form-row"></div>
<div class="bee-form-row"></div>
<div class="bee-form-row">
<div class="bee-field bee-field-id_lnty3g"><input id="id_lnty3g" name="privacy_policy" type="checkbox"/><label class="inline" for="id_lnty3g">I agree to the <a href="https://your_privacy_url">Privacy Policy</a></label></div>
</div>
<div class="bee-form-row">
<div class="bee-field bee-field-id_2jxrl8">
<div class="bee-button-container"><button id="id_2jxrl8" name="submit" type="submit" value="SIGN UP">SIGN UP</button></div>
</div>
</div>
</form>
</div>
</div>
</div>
</div>
<div class="bee-row bee-row-24">
<div class="bee-row-content">
<div class="bee-col bee-col-1 bee-col-w12">
<div class="bee-block bee-block-1 bee-divider">
<div class="spacer" style="height:40px;"></div>
</div>
</div>
</div>
</div>
<div class="bee-row bee-row-25">
<div class="bee-row-content">
<div class="bee-col bee-col-1 bee-col-w12">
<div class="bee-block bee-block-1 bee-heading">
<h2 style="color:#000000;direction:ltr;font-family:'Oswald', Arial, 'Helvetica Neue', Helvetica, sans-serif;font-size:40px;font-weight:normal;letter-spacing:normal;line-height:120%;text-align:center;margin-top:0;margin-bottom:0;">News &amp; Events </h2>
</div>
</div>
</div>
</div>
<div class="bee-row bee-row-26">
<div class="bee-row-content">
<div class="bee-col bee-col-1 bee-col-w4">
<div class="bee-block bee-block-1 bee-image"><img alt="News image" class="bee-center bee-fixedwidth bee-fullwidthOnMobile" src="images/photo-1516245834210-c4c142787335_1.jpeg" style="max-width:260px;"/></div>
<div class="bee-block bee-block-2 bee-text">
<div class="bee-text-content" style="font-size: 14px; line-height: 120%; color: #4d61fc; font-family: inherit;">
<p style="font-size: 14px; line-height: 16px; letter-spacing: 2px;">NEWS</p>
</div>
</div>
<div class="bee-block bee-block-3 bee-heading">
<h3 style="color:#000000;direction:ltr;font-family:'Oswald', Arial, 'Helvetica Neue', Helvetica, sans-serif;font-size:24px;font-weight:normal;letter-spacing:normal;line-height:120%;text-align:left;margin-top:0;margin-bottom:0;"><span style="color: #000000;"><strong><a href="http://www.example.com/" rel="noopener" style="text-decoration: none; color: #000000;" target="_blank">News Title</a></strong></span> </h3>
</div>
<div class="bee-block bee-block-4 bee-text">
<div class="bee-text-content" style="font-size: 14px; line-height: 120%; color: #393d47; font-family: inherit;">
<p style="font-size: 14px; line-height: 16px; text-align: left;"><span style="font-size: 16px; line-height: 19px;">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt</span><span style="font-size: 16px; line-height: 19px;"> dolore magna.</span></p>
</div>
</div>
</div>
<div class="bee-col bee-col-2 bee-col-w4">
<div class="bee-block bee-block-1 bee-image"><img alt="Event image" class="bee-center bee-fixedwidth bee-fullwidthOnMobile" src="images/photo-1569025743873-ea3a9ade89f9.jpeg" style="max-width:260px;"/></div>
<div class="bee-block bee-block-2 bee-text">
<div class="bee-text-content" style="font-size: 14px; line-height: 120%; color: #4d61fc; font-family: inherit;">
<p style="font-size: 14px; line-height: 16px; letter-spacing: 2px;">EVENT</p>
</div>
</div>
<div class="bee-block bee-block-3 bee-heading">
<h3 style="color:#000000;direction:ltr;font-family:'Oswald', Arial, 'Helvetica Neue', Helvetica, sans-serif;font-size:24px;font-weight:normal;letter-spacing:normal;line-height:120%;text-align:left;margin-top:0;margin-bottom:0;"><span style="color: #000000;"><strong><a href="http://www.example.com/" rel="noopener" style="text-decoration: none; color: #000000;" target="_blank">Event Title</a></strong></span> </h3>
</div>
<div class="bee-block bee-block-4 bee-text">
<div class="bee-text-content" style="font-size: 14px; line-height: 120%; color: #393d47; font-family: inherit;">
<p style="font-size: 14px; line-height: 16px; text-align: left;"><span style="font-size: 16px; line-height: 19px;">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismo ut laoreet dolore magna.</span></p>
</div>
</div>
</div>
<div class="bee-col bee-col-3 bee-col-w4">
<div class="bee-block bee-block-1 bee-image"><img alt="Event image" class="bee-center bee-fixedwidth bee-fullwidthOnMobile" src="images/photo-1590283603385-17ffb3a7f29f.jpeg" style="max-width:260px;"/></div>
<div class="bee-block bee-block-2 bee-text">
<div class="bee-text-content" style="font-size: 14px; line-height: 120%; color: #4d61fc; font-family: inherit;">
<p style="font-size: 14px; line-height: 16px; letter-spacing: 2px;">EVENT</p>
</div>
</div>
<div class="bee-block bee-block-3 bee-heading">
<h3 style="color:#000000;direction:ltr;font-family:'Oswald', Arial, 'Helvetica Neue', Helvetica, sans-serif;font-size:24px;font-weight:normal;letter-spacing:normal;line-height:120%;text-align:left;margin-top:0;margin-bottom:0;"><span style="color: #000000;"><strong><a href="http://www.example.com/" rel="noopener" style="text-decoration: none; color: #000000;" target="_blank">Event Title</a></strong></span> </h3>
</div>
<div class="bee-block bee-block-4 bee-text">
<div class="bee-text-content" style="font-size: 14px; line-height: 120%; color: #393d47; font-family: inherit;">
<p style="font-size: 14px; line-height: 16px; text-align: left;"><span style="font-size: 16px; line-height: 19px;">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismo ut laoreet dolore magna.</span></p>
</div>
</div>
</div>
</div>
</div>
<div class="bee-row bee-row-27">
<div class="bee-row-content">
<div class="bee-col bee-col-1 bee-col-w12">
<div class="bee-block bee-block-1 bee-divider">
<div class="spacer" style="height:40px;"></div>
</div>
</div>
</div>
</div>
<div class="bee-row bee-row-28">
<div class="bee-row-content">
<div class="bee-col bee-col-1 bee-col-w12">
<div class="bee-block bee-block-1 bee-divider">
<div class="spacer" style="height:30px;"></div>
</div>
</div>
</div>
</div>
<div class="bee-row bee-row-29">
<div class="bee-row-content">
<div class="bee-col bee-col-1 bee-col-w4">
<div class="bee-block bee-block-1 bee-image"><img alt="Logo" class="bee-fixedwidth" src="images/logo.png" style="max-width:195px;"/></div>
<div class="bee-block bee-block-2 bee-text">
<div class="bee-text-content" style="font-size: 14px; line-height: 150%; color: #393d47; font-family: inherit;">
<p style="font-size: 14px; line-height: 21px; text-align: left;"><span style="font-size: 16px; line-height: 24px;">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</span></p>
</div>
</div>
<div class="bee-block bee-block-3 bee-text">
<div class="bee-text-content" style="line-height: 120%; font-size: 12px; color: #393d47; font-family: inherit;">
<p style="font-size: 14px; line-height: 16px; text-align: left;">2021 © All rights reserved</p>
</div>
</div>
</div>
<div class="bee-col bee-col-2 bee-col-w3">
<div class="bee-block bee-block-1 bee-heading">
<h3 style="color:#000000;direction:ltr;font-family:'Oswald', Arial, 'Helvetica Neue', Helvetica, sans-serif;font-size:24px;font-weight:normal;letter-spacing:normal;line-height:120%;text-align:left;margin-top:0;margin-bottom:0;">Contact<br/> </h3>
</div>
<div class="bee-block bee-block-2 bee-menu">
<nav class="bee-menu">
<ul class="bee-vertical">
<li><a href="http://www.example.com/" target="_self" title="">(555) 555-1234</a></li>
<li><a href="http://www.example.com/" target="_self" title="">example@example.com</a></li>
</ul>
</nav>
</div>
<div class="bee-block bee-block-3 bee-social">
<div class="content"><span class="icon" style="padding:0 5px 0 5px;"><a href="https://www.facebook.com/"><img alt="Facebook" src="images/facebook2x.png" title="facebook"/></a></span><span class="icon" style="padding:0 5px 0 5px;"><a href="https://www.twitter.com/"><img alt="Twitter" src="images/twitter2x.png" title="twitter"/></a></span><span class="icon" style="padding:0 5px 0 5px;"><a href="https://www.instagram.com/"><img alt="Instagram" src="images/instagram2x.png" title="instagram"/></a></span><span class="icon" style="padding:0 5px 0 5px;"><a href="https://www.youtube.com/"><img alt="YouTube" src="images/youtube2x.png" title="YouTube"/></a></span></div>
</div>
</div>
<div class="bee-col bee-col-3 bee-col-w2">
<div class="bee-block bee-block-1 bee-heading">
<h3 style="color:#000000;direction:ltr;font-family:'Oswald', Arial, 'Helvetica Neue', Helvetica, sans-serif;font-size:24px;font-weight:normal;letter-spacing:normal;line-height:120%;text-align:left;margin-top:0;margin-bottom:0;">Links<br/> </h3>
</div>
<div class="bee-block bee-block-2 bee-menu">
<nav class="bee-menu">
<ul class="bee-vertical">
<li><a href="http://www.example.com/" target="_self" title="">Courses</a></li>
<li><a href="http://www.example.com/" target="_self" title="">Education</a></li>
<li><a href="http://www.example.com/" target="_self" title="">About</a></li>
<li><a href="http://www.example.com/" target="_self" title="">News</a></li>
</ul>
</nav>
</div>
</div>
<div class="bee-col bee-col-4 bee-col-w3">
<div class="bee-block bee-block-1 bee-heading">
<h3 style="color:#000000;direction:ltr;font-family:'Oswald', Arial, 'Helvetica Neue', Helvetica, sans-serif;font-size:24px;font-weight:normal;letter-spacing:normal;line-height:120%;text-align:left;margin-top:0;margin-bottom:0;">Newsletter<br/> </h3>
</div>
<div class="bee-block bee-block-2 bee-form">
<form accept-charset="UTF-8" action="ACTION_PLACEHOLDER" autocomplete="on" enctype="multipart/form-data" method="post" target="_self">
<div class="bee-form-row"></div>
<div class="bee-form-row"></div>
<div class="bee-form-row">
<div class="bee-field bee-field-id_g5wkdr"><input id="id_g5wkdr" name="email" placeholder="Your Email" required="" type="email"/></div>
</div>
<div class="bee-form-row"></div>
<div class="bee-form-row"></div>
<div class="bee-form-row"></div>
<div class="bee-form-row"></div>
<div class="bee-form-row"></div>
<div class="bee-form-row"></div>
<div class="bee-form-row"></div>
<div class="bee-form-row">
<div class="bee-field bee-field-id_vrrbju">
<div class="bee-button-container"><button id="id_vrrbju" name="submit" type="submit" value="SIGN UP">SIGN UP</button></div>
</div>
</div>
</form>
</div>
</div>
</div>
</div>
<div class="bee-row bee-row-30">
<div class="bee-row-content">
<div class="bee-col bee-col-1 bee-col-w12">
<div class="bee-block bee-block-1 bee-divider">
<div class="spacer" style="height:30px;"></div>
</div>
</div>
</div>
</div>
<div class="bee-row bee-row-31">
<div class="bee-row-content">
<div class="bee-col bee-col-1 bee-col-w12">
<div class="bee-block bee-block-1 bee-icons">
<div class="bee-icon">
<div class="bee-icon-image"><a href="https://www.designedwithbee.com/" target="_blank" title="Designed with BEE"><img alt="Designed with BEE" height="32px" src="images/bee.png" width="auto"/></a></div>
<div class="bee-icon-label-right"><a href="https://www.designedwithbee.com/" target="_blank" title="Designed with BEE">Designed with BEE</a></div>
</div>
</div>
</div>
</div>
</div>
</div>
</body>
</html>`;
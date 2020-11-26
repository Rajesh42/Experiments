import React from "react";
import theme from "theme";
import { Theme, Link, Strong, Text, Box, Span, Em } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, Menu, Section, StackItem, Stack } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section background="#000000">
			<Box
				display="flex"
				padding="12px 0"
				justify-content="space-between"
				align-items="center"
				flex-direction="row"
				md-flex-direction="column"
			>
				<Text
					margin="0"
					md-margin="0px 0 20px 0"
					text-align="left"
					font="--lead"
					color="--grey"
				>
					<Strong
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
					>
						Rajesh42
					</Strong>
				</Text>
				<Menu
					display="flex"
					justify-content="center"
					font="--base"
					font-weight="700"
					md-flex-direction="column"
					md-align-items="center"
				>
					<Override
						slot="link"
						text-decoration="none"
						color="--grey"
						padding="6px 12px"
						hover-color="--darkL1"
						border-color="--color-grey"
						hover-opacity="1"
						active-color="--darkL2"
						link-color="--grey"
					/>
					<Override slot="link-active" color="--grey" />
					<Override slot="item" padding="6px" />
					<Override slot="link-index">
						Home
					</Override>
					<Override slot="link-404">
						About
					</Override>
					<Override slot="link-education">
						Education
					</Override>
				</Menu>
			</Box>
		</Section>
		<Section
			padding="140px 0"
			sm-padding="40px 0"
			background="linear-gradient(180deg,--color-darkL2 0%,transparent 100%) 0 0 no-repeat,--color-dark url(https://uploads.quarkly.io/5fbf235a8996cc001edd3c1e/images/photo_2020-11-26_09-59-59.jpg?v=2020-11-26T04:30:33.616Z) 50% 15%/cover"
			color="--light"
			font="--base"
		>
			<Box>
				<Text
					as="h1"
					margin="0 0 96px 0"
					text-align="center"
					letter-spacing="50px"
					text-transform="uppercase"
					font="100 132px/1.2 --fontFamily-sans"
					lg-font="200 42px/1.2 --fontFamily-sans"
					lg-letter-spacing="20px"
					transition="all --transitionDuration-fast --transitionTimingFunction-easeIn 1s"
					hover-color="#7aaee2"
					opacity="1"
					hover-opacity="0"
					hover-transition="all 1s --transitionTimingFunction-easeInOut 0s"
				>
					Rajesh
					<br />
					RANJAN
				</Text>
			</Box>
			<Stack>
				<StackItem
					width="25%"
					lg-width="50%"
					sm-width="100%"
					font="--lead"
					text-transform="uppercase"
					letter-spacing="1px"
				>
					<Text margin="0px" hover-opacity="0" hover-transition="all 1s --transitionTimingFunction-easeOut 0s">
						About me
					</Text>
				</StackItem>
				<StackItem
					width="25%"
					lg-width="50%"
					sm-width="100%"
					opacity="1"
					transition="all 1s --transitionTimingFunction-easeOut 0s"
					hover-opacity="0"
				>
					<Text margin="0px">
						<Em
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							My name is Rajesh Ranjan, born and raised in{" "}
							<Span
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								<Span
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									<Strong
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										Jamshedpur
									</Strong>
								</Span>
							</Span>
							.
						</Em>
					</Text>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%">
					<Text margin="0px" hover-opacity="0" hover-transition="all 1s ease 0s">
						<Em
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							I've been working as a professional graphic designer for more than 2 years.
						</Em>
					</Text>
				</StackItem>
				<StackItem
					width="25%"
					lg-width="50%"
					sm-width="100%"
					hover-opacity="0"
					hover-transition="all 1s --transitionTimingFunction-easeOut 0s"
				>
					<Text margin="0px">
						<Em
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Currently studying at{" "}
							<br />
							<Strong
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								<Span
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Jadavpur University
								</Span>
							</Strong>
						</Em>
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});
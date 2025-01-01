import { Flex, Anchor, Text } from "@mantine/core";
import Link from "next/link";

const Footer = () => {
	return (
		<footer>
			<Flex
				fz={12}
				justify="center"
				w="100%"
				align="center"
				gap={20}
				mt={50}
				wrap="wrap"
			>
				

				<Text>
					Built by{" "}
					<Anchor
						c="gray.6"
						href="https://x.com/Jeevakrish73"
						target="_blank"
						data-splitbee-event="Author click"
					>
						Jeevakrishna Vetrivel
					</Anchor>
				</Text>
			</Flex>
		</footer>
	);
};

export default Footer;

/** 
<Link
					href="/changelog"
					passHref
					legacyBehavior
					data-splitbee-event="Changelog click"
				>
					<Anchor c="gray.6">Changelog</Anchor>
				</Link>

				<Link
					href="/contact"
					passHref
					legacyBehavior
					data-splitbee-event="Contact click"
				>
					<Anchor c="gray.6">Contact</Anchor>
				</Link>

*/ 
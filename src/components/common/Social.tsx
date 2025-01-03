import { Flex, Tooltip } from "@mantine/core";
import { IconBrandTwitter, IconBrandGithub, IconBrandProducthunt } from "@tabler/icons";

import Action from "./Action";

const Social = () => {
	return (
		<Flex
			align="center"
			gap={10}
		>
			<Tooltip label="Share on twitter">
				<Action
					component="a"
					target="_blank"
					rel="noopener noreferrer"
					href={`https://twitter.com/intent/tweet
					?text=Craft the perfect space to boost focus and tackle your daily tasks
					&url=https://zen.mode.vercal.app&hashtags=lofi,pomodoro,todo&via=1zenmode`}
					color="blue"
					variant="subtle"
				>
					<IconBrandTwitter size={18} />
				</Action>
			</Tooltip>

			<Action
				component="a"
				target="_blank"
				rel="noopener noreferrer"
				href="https://github.com/Jeevakrishna/WorkRipple"
				variant="subtle"
			>
				<IconBrandGithub size={18} />
			</Action>

			<Action
				component="a"
				target="_blank"
				rel="noopener noreferrer"
				href="https://www.producthunt.com/products/----"
				variant="subtle"
				color="orange"
			>
				<IconBrandProducthunt size={18} />
			</Action>
		</Flex>
	);
};

export default Social;

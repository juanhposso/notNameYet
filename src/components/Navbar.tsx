import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";

const Navbar = () => {
	return (
		<nav className='sticky h-14 inset-x-0 top-0 w-full z-30 border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>
			<MaxWidthWrapper>
				<div className='flex h-14 items-center justify-between border-b border-zinc-200'>
					<Link href='/' className='flex z-40 font-semibold'>
						<span>NotNameYet</span>
					</Link>
				</div>
			</MaxWidthWrapper>
		</nav>
	);
};

export default Navbar;

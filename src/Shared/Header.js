import { signOut } from 'firebase/auth';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';
import './Header.css';
const Header = () => {
	const [user] = useAuthState(auth);
	const handleSignOut = () => {
		signOut(auth);
	}
	return (
		<div>
			<header class="main__header">
				<div class="container">
					<div class="row">
						<div class="col">
							<nav class="navbar navbar-default pl-0 pr-0" role="navigation">
								<div class="col-md-3">

									<div class="navbar-header d-none d-md-block">
										<h1 class="navbar-brand text-center p-0 m-0"><Link as={Link} to="/">Sport<span>Valy</span></Link></h1>

									</div>
								</div>
								<div class="col-md-9">
									<div class="row">
										<div class="col-2"><a href="#" onClick="javascript.void()" class="submenu mt-2">Menus</a> </div>
										<div class="col-5 text-center"><div class="navbar-header d-block d-md-none">
											<h1 class="navbar-brand text-center p-0 m-0"><Link as={Link} to="/">Sport<span>Valy</span></Link></h1>

										</div></div>
										<div class="col-5 text-right">

											{
												user ?
													<Button onClick={handleSignOut}>Signout</Button>
													:
													<Button className='login' as={Link} to="/login">Login</Button>

											}
										</div>
										<div class="col-12">
											<div class="menuBar">
												<ul class="menu">

													<li><Link as={Link} to="/">Home</Link></li>
													<li><Link as={Link} to="/players">Players</Link></li>
													<li><Link as={Link} to="/add-record">Add Record</Link></li>
													<li><Link as={Link} to="/addacademy">Add Academy</Link></li>
													{
														user ?
														<li><Link as={Link} to="/addacademy">Dashboard</Link></li>
														:
														<></>
													}
													


												</ul>
											</div>

										</div>
									</div>
								</div>



							</nav>

						</div>
					</div>
				</div>
			</header>

		</div>
	);
};

export default Header;
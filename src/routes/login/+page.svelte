<script>
	let email='';
	let password='';
	let allow=true;
	$:{
		if(email==''||password==''){
			allow=true
		}
		else
		{
			allow=false
		}
	}
</script>
<div class='container'>
	<h2>Đăng nhập</h2>
	<div class='board'>
		<form method="POST" action="?/login">
			<label>
				Email
				<input name="email" type="text" bind:value={email}>
			</label>
			<label>
				Password
				<input name="password" type="text" bind:value={password}>
			</label>
			<button disabled={allow}>Đăng nhập</button>
		</form>
	</div>
	<h2>Hoặc</h2>	
	<a href='/register'><button>Đăng kí</button></a>
</div>

<style>
	.container
	{
		height: 70vh;
	}
	.container,form
	{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.board
	{
		background-color:rgb(46, 198, 249);
		border-radius: 12px;
		padding: 20px;
	}
	label,button,h2
	{
		font-family: 'Courier New', Courier, monospace;
		font-size: large;
		font-weight: bold;
	}
	label
	{
		margin:30px;
	}
	button{
		border-radius: 5px;
	}
</style>

<script>
	let name='';
	let password='';
	let email='';
	let allow=true
	$:{
		console.log(name)
		if(name=== '' || password==='' || email===''){
			allow=true
		}
		else
		{
			allow=false
		}
	}
</script>

<div class='container'>
	<h2>Tạo tài khoản</h2>
	<div class='board'>
		<form method="POST" action="?/register">
			<label>
				Name
				<input name="user" type="text" bind:value={name}>
			</label>
			<label>
				Password
				<input name="password" type="text" bind:value={password}>
			</label>
			<label>
				Email
				<input name='email' type="text" bind:value={email}>
			</label>
			<button disabled={allow}>Đăng kí</button>
		</form>
	</div>
	<h2>Hoặc</h2>
	<a href='/login'><button>Đăng nhập</button></a>
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


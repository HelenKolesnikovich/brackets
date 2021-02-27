module.exports = function check(str, bracketsConfig) {
    const brackets = str.split('');

	let listBrackets = [];
	start: for(let i = 0; i < brackets.length; i++)
	{
		for(let j = 0; j < bracketsConfig.length; j++)
		{
			if(brackets[i] == bracketsConfig[j][0])			//open bracket
			{
				if(bracketsConfig[j][0] == bracketsConfig[j][1])		//one type brackets
				{
					if(listBrackets.length == 0)
					{
						listBrackets.push(brackets[i]);
						continue start;
					}
					else if(listBrackets[listBrackets.length - 1] != bracketsConfig[j][0])
					{
						listBrackets.push(brackets[i]);
						continue start;
					}
					else if(listBrackets[listBrackets.length - 1] == bracketsConfig[j][0])
					{
						listBrackets.pop();
						continue start;
					}
				}
				else											//different type brakets
				{
					listBrackets.push(brackets[i]);
					continue start;
				}
			}
			else if(brackets[i] == bracketsConfig[j][1])						//close bracket
			{
				if(listBrackets[listBrackets.length - 1] == bracketsConfig[j][0])
				{
					listBrackets.pop();
					continue start;
				}
				else{
					return false;
				}
			}	
		}
	}

	if(listBrackets.length == 0){
		return true;
	}
	else{
		return false;
	}
}

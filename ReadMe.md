yarn add react-native-communications@2.1.3 --save


{
	"rules": {
		"users": {
			"$uid": {
				".read": "$uid === auth.uid",
				".write": "$uid === auth.uid"
			}
		}
	}
}
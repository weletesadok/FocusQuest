import React from "react";
import { ScrollView, View, Text } from "react-native";
import tw from "twrnc";
import MotivationCard from "../../components/MotivationCard";

const quotes = [
  {
    quote: "Believe you can, and you're halfway there.",
    image: "https://picsum.photos/300/200?random=1",
    category: "Inspiration",
  },
  {
    quote:
      "The harder you work for something, the greater you'll feel when you achieve it.",
    image: "https://picsum.photos/300/200?random=2",
    category: "Hard Work",
  },
  {
    quote:
      "Success doesn't come from what you do occasionally, it comes from what you do consistently.",
    image: "https://picsum.photos/300/200?random=3",
    category: "Success",
  },
  {
    quote: "Dream it. Believe it. Build it.",
    image: "https://picsum.photos/300/200?random=4",
    category: "Motivation",
  },
  {
    quote: "Don't stop when you're tired. Stop when you're done.",
    image: "https://picsum.photos/300/200?random=5",
    category: "Perseverance",
  },
];

const Motivations = () => {
  return (
    <ScrollView>
      <View style={tw`flex-row flex-wrap justify-center`}>
        {quotes.map((item, index) => (
          <View key={index} style={tw`w-72 m-2`}>
            <MotivationCard image={item.image} text={`${item.quote}`} />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Motivations;

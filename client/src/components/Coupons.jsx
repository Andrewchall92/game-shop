import * as React from "react";
import { Stack } from "@mui/material";
import CouponCard from "./CouponCard";

const CouponsList = [
  {
    id: 1,
    name: "20% off First Purchase",
    description: "This Only Work for first time Buyer",
  },
  { id: 2, name: "10% off for Loyal Customer", description: "Loyal Customer" },
  {
    id: 3,
    name: "15% off Big Purchase",
    description: "Take 15% off for order of 100$ or more",
  },
];

const Coupons = () => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={5}
      flex={4}
      p={2}
    >
      {CouponsList.map((coupon) => (
        <CouponCard
          discount={coupon.name}
          description={coupon.description}
          key={coupon.id}
        />
      ))}
    </Stack>
  );
};

export default Coupons;

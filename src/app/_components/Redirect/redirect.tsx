//import { Button, Link } from "@nextui-org/react";
//import Container from "$/src/app/_components/Container/container";
import { SignedOut } from "@clerk/nextjs";
import { siteConfig } from "$/src/config/site";
import { SignIn } from "@clerk/nextjs";
import Container from "../../_components/Container/container";
import {
  Button,
  CardBody,
  Input,
  Image,
  useDisclosure,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Link,
  Snippet,
} from "@nextui-org/react";
import { Card } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { api } from "$/src/trpc/react";
import { FaCheck, FaLock, FaSpinner } from "react-icons/fa";
import { useSearchParams } from "next/navigation";
import WalletAddressDetails from "../../_components/OpenPayments/walletAddressDetails";
import IncomingPaymentDetails from "../../_components/OpenPayments/incomingPaymentDetails";
import QuoteDetails from "../../_components/OpenPayments/quoteDetails";

const Redirect = () => {
  return (
    <Container className="flex h-screen flex-col items-center text-center">
      <div className="w-9/12 md:w-6/12">
        <div style={{ height: "52px" }}></div>
        <div style={{ width: "100%", display: "flex" }}>
          <span style={{ width: "50%", flex: "1" }}>
            <label
              style={{ fontSize: "25px" }}
              className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight"
            >
              Quotated Amount:
            </label>
          </span>
          <span style={{ width: "50%", flex: "1" }}>
            {/*value={senderWalletAddress}
            onValueChange={setWalletAddress}*/}
            <Input
              name="walletAddress"
              className="text-sm"
              color="primary"
              disabled
            />
          </span>
        </div>

        <div style={{ height: "30px" }}>{/* just a gap*/}</div>

        <div style={{ width: "100%", display: "flex" }}>
          <span style={{ width: "50%", flex: "1" }}>
            <label
              style={{ fontSize: "25px" }}
              className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight"
            >
              Vendor/Payee wallet Address:
            </label>
          </span>
          <span style={{ width: "50%", flex: "1" }}>
            {/*value={senderWalletAddress}
            onValueChange={setWalletAddress}*/}
            <Input
              name="walletAddress"
              className="text-sm"
              color="primary"
              disabled
            />
          </span>
        </div>
        <div style={{ height: "30px" }}>{/* just a gap*/}</div>
        <div style={{ width: "100%", display: "flex" }}>
          <span style={{ width: "50%", flex: "1" }}>
            <label
              style={{ fontSize: "25px" }}
              className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight"
            >
              Payer wallet address:
            </label>
          </span>
          <span style={{ width: "50%", flex: "1" }}>
            {/*value={senderWalletAddress}
            onValueChange={setWalletAddress}*/}
            <Input
              name="walletAddress"
              className="text-sm"
              color="primary"
              placeholder="Enter sender's wallet address"
            />
          </span>
        </div>

        <div style={{ height: "50px" }}></div>

        <p className="text-body-color dark:text-body-color-dark mb-12 text-base !leading-relaxed sm:text-lg md:text-xl"></p>
        <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <Button
            className="rounded-sm px-8 py-4 text-base font-semibold"
            size="lg"
            color="secondary"
            style={{ borderRadius: "12px" }}
          >
            <Link
              isExternal
              href={siteConfig.links.openPayments}
              className="text-base font-semibold text-white"
            >
              Proceed with payment
            </Link>
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Redirect;

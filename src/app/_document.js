// eslint-disable-next-line @next/next/no-document-import-in-page
import Document from "next/document";
import {createGetInitialProps} from "@mantine/next";

const getInitialProps = createGetInitialProps();

export default class _Document extends Document {
    static getInitialProps = getInitialProps;
}
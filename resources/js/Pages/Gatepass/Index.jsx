import Authenticated from "@/Layouts/AuthenticatedLayout";
import { PageContainer, ProCard, ProTable } from "@ant-design/pro-components";
import { Head, Link } from "@inertiajs/react";
import { Space, Button, Tag } from "antd";

export default function Index({ auth, gatepasses }) {
    //console.log(gatepasses);
    return (
        <>
            <Head title="All gatepasses" />
            <Authenticated user={auth.user}>
                <PageContainer
                    header={{
                        title: "Gatepass",
                        onBack: () => window.history.back(),
                    }}
                >
                    <ProTable
                        headerTitle="Gatepass"
                        dataSource={gatepasses.data}
                        columns={[
                            {
                                title: "Name",
                                dataIndex: "mgr_gtpgatepass_name",
                            },
                            {
                                title: "Vehicle Reg",
                                dataIndex: "mgr_gtpgatepass_vehiclereg",
                            },

                            {
                                title: "Department",
                                dataIndex: [
                                    "department",
                                    "mgr_gtpdepartments_name",
                                ],
                                hideInSearch: true,
                            },

                            {
                                title: "Auxilary Document",
                                dataIndex: "mgr_gtpgatepass_auxilarydoc",
                            },
                            {
                                title: "Purpose",
                                dataIndex: "mgr_gtpgatepass_purpose",
                                hideInSearch: true,
                            },
                            {
                                title: "Source Location",
                                dataIndex: [
                                    "source_location",
                                    "mgr_gtplocations_name",
                                ],
                                hideInSearch: true,
                            },
                            {
                                title: "Destination Location",
                                dataIndex: [
                                    "destination_location",
                                    "mgr_gtplocations_name",
                                ],
                                hideInSearch: true,
                            },

                            {
                                title: "Specific Destination",
                                dataIndex: "mgr_gtpgatepass_destination",
                                hideInSearch: true,
                            },
                            {
                                title: "Status",
                                dataIndex: "mgr_gtpgatepass_status",

                                // if status is 0 show pending
                                render: (text) => {
                                    if (text === 0) {
                                        return (
                                            <Tag color="red">Rejected</Tag>
                                        );
                                    } else if (text === 1) {
                                        return (
                                            <Tag color="green">Approved</Tag>
                                        );
                                    } else if (text === 2) {
                                        return <Tag color="green">Pending</Tag>;
                                    }
                                    else {
                                        return <Tag color="blue">Draft</Tag>;
                                    }
                                },
                            },
                            {
                                title: "Actions",
                                render: (_, record) => (
                                    <Link
                                        href={route(
                                            "gatepass.show",
                                            record.mgr_gtpgatepass_id
                                        )}
                                    >
                                        View Details
                                    </Link>
                                ),
                            },
                            {
                                title: "Actions",
                                render: (_, record) => (
                                    <Link
                                        href={route(
                                            "gatepass.edit",
                                            record.mgr_gtpgatepass_id
                                        )}
                                    >
                                        Edit
                                    </Link>
                                ),
                            },
                            //create button to submit a gatepass request
                        ]}
                        rowKey="mgr_gtpgatepass_id"
                    />
                </PageContainer>
            </Authenticated>
        </>
    );
}
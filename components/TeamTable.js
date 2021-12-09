import { BsTwitter } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";

function TeamTable() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="col-span-12">
                <div className="overflow-auto lg:overflow-visible ">
                    <table className="table text-gray-400 border-separate space-y-6 text-sm">
                        <thead className="bg-gray-800 text-gray-500">
                            <tr>
                                <th className="p-3">Team</th>
                                <th className="p-3 text-left">Role</th>
                                <th className="p-3 text-left">Social</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-gray-800">
                                <td className="p-3">
                                    <div className="flex align-items-center">
                                        <img className="rounded-full h-12 w-12 object-cover" src="https://pbs.twimg.com/profile_images/1454875781272903680/1epUsYN4_400x400.jpg" alt="twitter image" />
                                        <div className="mx-auto my-auto">
                                            <div className="">A1X0</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-3">
                                    <div class="badge badge-primary">Social Media Guru</div>
                                </td>
                                <td className="p-3">
                                    <div className="flex space-x-3">
                                        <a href="https://twitter.com/Ascorbic3x"> <BsTwitter /> </a>
                                    </div>
                                </td>
                            </tr>
                            <tr className="bg-gray-800">
                                <td className="p-3">
                                    <div className="flex align-items-center">
                                        <img className="rounded-full h-12 w-12   object-cover" src="https://imgr.search.brave.com/5-E_LJuUQUeOa5dRTIUrSqZsoANPuXpibxSwtNyWF-M/fit/1200/1080/ce/1/aHR0cHM6Ly9kb3du/bG9hZHdhbGxwYXBl/ci5vcmcvd3AtY29u/dGVudC91cGxvYWRz/LzIwMTYvMDYvcHVy/ZS1ibGFjay13YWxs/cGFwZXIxLnBuZw" alt="twitter image" />
                                        <div className="mx-auto my-auto">
                                            <div className="">Convex</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-3">
                                    <div class="badge badge-accent">Smart Contract</div>
                                </td>
                                <td className="p-3">
                                    <div className="flex space-x-3">
                                        <BsTwitter />
                                    </div>
                                </td>
                            </tr>
                            <tr className="bg-gray-800">
                                <td className="p-3">
                                    <div className="flex align-items-center">
                                        <img className="rounded-full h-12 w-12   object-cover" src="https://pbs.twimg.com/profile_images/1396526102458273799/VJbT2tXb_400x400.jpg" alt="twitter image" />
                                        <div className="mx-auto my-auto">
                                            <div className="">Madye</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-3">
                                    <div class="badge badge-outline">Designer</div>
                                </td>
                                <td className="p-3">
                                    <div className="flex space-x-3">
                                        <a href="https://twitter.com/yieldah"><BsTwitter /></a>
                                    </div>
                                </td>
                            </tr>
                            <tr className="bg-gray-800">
                                <td className="p-3">
                                    <div className="flex align-items-center">
                                        <img className="rounded-full h-12 w-12 object-cover" src="https://pbs.twimg.com/profile_images/1358236530242904064/UriSMas0_400x400.jpg" alt="twitter image" />
                                        <div className="mx-auto my-auto">
                                            <div className="ml-3">Metricaez</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-3">
                                    <div class="badge badge-accent">Smart Contract</div>
                                </td>
                                <td className="p-3">
                                    <div className="flex space-x-3">
                                        <a href="https://twitter.com/metricaez"> <BsTwitter /> </a>
                                    </div>
                                </td>
                            </tr>
                            <tr className="bg-gray-800">
                                <td className="p-3">
                                    <div className="flex align-items-center">
                                        <img className="rounded-full h-12 w-12   object-cover" src="https://pbs.twimg.com/profile_images/1463949846054793225/BkwUXGdy_400x400.jpg" alt="twitter image" />
                                        <div className="mx-auto my-auto">
                                            <div className="">NUnicorn</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-3">
                                    <div class="badge badge-accent">Website</div>
                                </td>
                                <td className="p-3">
                                    <div className="flex space-x-3">
                                        <a href="https://twitter.com/unicornewborn"><BsTwitter /></a>
                                    </div>
                                </td>
                            </tr>
                            <tr className="bg-gray-800">
                                <td className="p-3">
                                    <div className="flex align-items-center">
                                        <img className="rounded-full h-12 w-12   object-cover" src="https://pbs.twimg.com/profile_images/1375935368789364743/3yIB5kRE_400x400.jpg" alt="twitter image" />
                                        <div className="mx-auto my-auto">
                                            <div className="">RED</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-3">
                                    <div class="badge badge-accent">Engineer</div>
                                </td>
                                <td className="p-3">
                                    <div className="flex space-x-3">
                                        <a href="https://twitter.com/MobiusRed"><BsTwitter /></a>
                                    </div>
                                </td>
                            </tr>
                            <tr className="bg-gray-800">
                                <td className="p-3">
                                    <div className="flex align-items-center">
                                        <img className="rounded-full h-12 w-12   object-cover" src="https://pbs.twimg.com/profile_images/1468388730285314055/Y1xNsS7X_400x400.jpg" alt="twitter image" />
                                        <div className="mx-auto my-auto">
                                            <div className="">Shanghai</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-3">
                                    <div class="badge badge-accent badge-outline">Team Lead</div>
                                </td>
                                <td className="p-3">
                                    <div className="flex space-x-3">
                                        <a href="https://twitter.com/ssh_shang"> <BsTwitter /> </a>
                                    </div>
                                </td>
                            </tr>
                            <tr className="bg-gray-800">
                                <td className="p-3">
                                    <div className="flex align-items-center">
                                        <img className="rounded-full h-12 w-12   object-cover" src="https://imgr.search.brave.com/5-E_LJuUQUeOa5dRTIUrSqZsoANPuXpibxSwtNyWF-M/fit/1200/1080/ce/1/aHR0cHM6Ly9kb3du/bG9hZHdhbGxwYXBl/ci5vcmcvd3AtY29u/dGVudC91cGxvYWRz/LzIwMTYvMDYvcHVy/ZS1ibGFjay13YWxs/cGFwZXIxLnBuZw" alt="twitter image" />
                                        <div className="mx-auto my-auto">
                                            <div className="">Wetcircle</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-3">
                                    <div class="badge badge-accent">Smart contract</div>
                                </td>
                                <td className="p-3">
                                    <div className="flex space-x-3">
                                        <BsTwitter />
                                    </div>
                                </td>
                            </tr>
                            <tr className="bg-gray-800">
                                <td className="p-3">
                                    <div className="flex align-items-center">
                                        <img className="rounded-full h-12 w-12   object-cover" src="https://pbs.twimg.com/profile_images/1468022814410162182/CcMWchGC_400x400.jpg" alt="twitter image" />
                                        <div className="mx-auto my-auto">
                                            <div className="">Y10</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-3">
                                    <div class="badge badge-primary">Social Media Guru</div>
                                </td>
                                <td className="p-3">
                                    <div className="flex space-x-3">
                                        <a href="https://twitter.com/0xY10_"><BsTwitter /></a>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default TeamTable
